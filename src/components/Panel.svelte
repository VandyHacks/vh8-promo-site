
<div class="panel">
	<slot></slot>
</div>

<style>
	.panel {
		display: flex;
        min-width: 25vw;
		flex-direction: column;
		justify-content: center;
		row-gap: 5vh;
		align-items: center;
		color: #fff;
	}

	@media only screen and (max-width: 420px) {
		.panel {
			margin-top: -80px;
		}
	}
</style>