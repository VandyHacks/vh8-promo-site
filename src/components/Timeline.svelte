<script>
    import { onMount } from "svelte";
    import { scheduleItems } from "../stores.js";
    import { get } from "svelte/store";

    onMount(async () => {
        try {
            const res = await fetch("https://calendar.nisala.workers.dev/", 
                {
                    method: "GET",
                    mode: "cors",
                    credentials: "same-origin",
                    headers: {
                        "Content-Type": "application/json",
                        "Access-Control-Allow-Origin": "*",
                        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
                    },
                });
            const items = await res.json();
            scheduleItems.set(items);
        } catch (e) {
            console.error("Failed to fetch latest events, showing fallback");
            console.error(e);
        }
    });

    const sortedSchedule = get(scheduleItems).sort(
        (a, b) => new Date(a.startTimestamp) - new Date(b.startTimestamp)
    );

    const isValidUrl = (string) => {
        let url;
        try {
            url = new URL(string);
        } catch (_) {
            return false;
        }

        return url.protocol === "http:" || url.protocol === "https:";
    };

    const parseLocation = (location) => {
        const isURL = isValidUrl(location);
        if (isURL) {
            const host = new URL(location).host.split(".")[1];
            return `<a href="${location}" target="_blank" style="text-decoration: none, color: #fff">${
                host[0].toUpperCase() + host.slice(1).toLowerCase()
            }</a>`;
        } else {
            return location;
        }
    };

    const formatTime = (timeStamp, duration) => {
        const startDate = new Date(timeStamp);
        const endDate = new Date(startDate.getTime() + duration * 60000);

        const startTime = `${
            startDate.getHours() < 10 ? "0" : ""
        }${startDate.getHours()}:${
            startDate.getMinutes() < 10 ? "0" : ""
        }${startDate.getMinutes()}`;
        const endTime = `${
            endDate.getHours() < 10 ? "0" : ""
        }${endDate.getHours()}:${
            endDate.getMinutes() < 10 ? "0" : ""
        }${endDate.getMinutes()}`;

        return `${startTime}-${endTime}`;
    };
</script>

<ul class="timeline">
    {#each sortedSchedule as scheduleItem}
        <li>
            <div class="bubble">
                <div class="left">
                    <p class="name">{scheduleItem.name}</p>
                    {#if scheduleItem.description.length}
                        <p class="description">{scheduleItem.description}</p>
                    {/if}
                    {#if scheduleItem.location}
                        <br />
                        <p class="location">
                            Location: {@html parseLocation(
                                scheduleItem.location
                            )}
                        </p>
                    {/if}
                </div>
                <div class="right">
                    <p class="start-time">
                        {formatTime(
                            scheduleItem.startTimestamp,
                            scheduleItem.duration
                        )}
                    </p>
                    <p class="start-day">
                        {`Oct ${new Date(
                            scheduleItem.startTimestamp
                        ).getDate()}`}
                    </p>
                </div>
            </div>
        </li>
    {/each}
</ul>

<style>
    p {
        margin: 0;
    }

    .name {
        font-size: 2.6rem;
    }

    .description {
        margin-top: 4px;
        color: #d3d3d3;
        font-size: 1.5rem;
    }

    .location {
        color: #fff;
        font-size: 1.5rem;
    }

    .start-time {
        font-size: 2.25rem;
    }
    .start-day {
        font-size: 2rem;
    }

    .bubble {
        background: rgba(255, 255, 255, 0.15);
        border-radius: 24px;
        box-sizing: content-box;
        margin-left: 160px;
        max-width: 54vw;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        position: relative;
    }
    .bubble:after {
        content: "";
        position: absolute;
        left: 0;
        top: 50%;
        width: 0;
        height: 0;
        border: 25px solid transparent;
        border-right-color: rgba(255, 255, 255, 0.15);
        border-left: 0;
        margin-top: -25px;
        margin-left: -25px;
    }
    .left {
        padding: 24px 32px;
        flex-grow: 2;
        max-width: 36vw;
        inline-size: 30vw;
        overflow-wrap: break-word;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .right {
        padding: 24px;
        flex-grow: 1;
        max-width: 18vw;
        border-left: 1.75px solid #5e5e60;
        text-align: center;
        align-self: center;
    }
    .right::after {
        height: 500px;
    }

    li:first-child {
        margin-top: 40px;
    }

    li:not(:last-child) {
        margin-bottom: 40px;
    }

    .timeline {
        position: relative;
        max-height: 46vh;
        overflow-x: hidden;
        overflow-y: scroll;
        width: 100%;
        margin: 0 auto;
        margin-top: 20px;
        padding: 1em 0;
        list-style-type: none;
    }
    .timeline:before {
        position: absolute;
        left: 10%;
        top: 0;
        content: " ";
        display: block;
        width: 6px;
        height: 6600px;
        margin-left: -3px;
        background: rgba(255, 255, 255, 0.15);
        background: -moz-linear-gradient(
            top,
            rgba(80, 80, 80, 0) 0%,
            rgb(80, 80, 80) 8%,
            rgb(80, 80, 80) 92%,
            rgba(80, 80, 80, 0) 100%
        );
        background: -webkit-linear-gradient(
            top,
            rgba(80, 80, 80, 0) 0%,
            rgb(80, 80, 80) 8%,
            rgb(80, 80, 80) 92%,
            rgba(80, 80, 80, 0) 100%
        );
        background: -o-linear-gradient(
            top,
            rgba(80, 80, 80, 0) 0%,
            rgb(80, 80, 80) 8%,
            rgb(80, 80, 80) 92%,
            rgba(80, 80, 80, 0) 100%
        );
        background: -ms-linear-gradient(
            top,
            rgba(80, 80, 80, 0) 0%,
            rgb(80, 80, 80) 8%,
            rgb(80, 80, 80) 92%,
            rgba(80, 80, 80, 0) 100%
        );
        background: linear-gradient(
            to bottom,
            rgba(80, 80, 80, 0) 0%,
            rgb(80, 80, 80) 8%,
            rgb(80, 80, 80) 92%,
            rgba(80, 80, 80, 0) 100%
        );

        z-index: 5;
    }

    @media only screen and (max-width: 420px) {
        * {
            font-size: 1rem;
        }
        .bubble {
            margin-left: 0px;
        }

        .left {
            padding: 24px;
            min-width: calc(100% - 24px);
            box-sizing: content-box;
        }
        .right {
            min-width: calc(100% - 24px);
            box-sizing: content-box;
        }

        .bubble::after {
            content: "";
            border: 0;
        }

        .timeline:before {
            visibility: hidden;
        }

        .bubble {
            flex-direction: column;
            min-width: 100%;
        }

        .name {
            font-size: 2.5rem;
        }

        .right {
            border: 0;
        }
    }
</style>
