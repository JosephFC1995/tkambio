<template>
	<div id="app">
		<div class="app-content screen-loading">
			<div id="loading-logo">
				<img alt="Tkambio" src="@/assets/logo.png" class="loading-logo" />
			</div>
			<Waves />
			<NavBar />
			<Overlay />
			<NavbarMovil />
			<div class="container container-min position-relative">
				<router-view />
				<Footer />
			</div>
		</div>
	</div>
</template>

<script>
import NavbarMovil from "./components/global/NavbarMovil";
import NavBar from "./components/global/Navbar";
import Overlay from "./components/global/Overlay";
import Footer from "./components/global/Footer.vue";
import Waves from "./components/svg/Waves";

export default {
	name: "Inicio",
	metaInfo: {
		title: "Tkambio",
		titleTemplate: "%s | Cambia soles y dólares en minutos ⌛",
	},
	components: {
		NavBar,
		Footer,
		Waves,
		NavbarMovil,
		Overlay,
	},
};
</script>

<style lang="scss">
#app {
	overflow-x: hidden;
	position: relative;
	min-height: 100vh;
}
.screen-loading {
	height: 100vh;
	overflow: hidden;
	position: relative;
	.waves-svg {
		transform: scale(4);
	}
}
#loading-logo {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	img {
		height: 60px;
		@media (max-width: 768px) {
			height: 45px;
		}
	}
}
.waves {
	&-svg {
		position: absolute;
		top: 0;
		z-index: -1;
		left: 0;
		right: 0;
		svg {
			width: 100%;
			height: 100%;
			transition: all 0.5s;
			@media (max-width: 768px) {
				width: auto;
				height: 100%;
			}
		}
		@media (max-width: 460px) {
			right: 0;
			left: auto;
			top: -14rem;
		}
	}
}
.container {
	&-min {
		// overflow: hidden;
		// min-height: 100vh;
	}
}
.content {
	&-viewport {
		min-height: 65vh;
		@media (max-width: 768px) {
			min-height: 55vh;
			width: 85%;
			margin: 0 auto;
		}
		@media (max-width: 460px) {
			width: 100%;
			margin-bottom: 4rem;
		}
	}
}
#illustration {
	position: absolute;
	bottom: 4rem;
	right: 4rem;
	@media (max-width: 768px) {
		display: none;
	}
}
.ov-loading {
	opacity: 0;
	visibility: hidden;
}
</style>
