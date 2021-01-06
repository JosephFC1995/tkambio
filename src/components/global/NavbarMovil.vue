<template>
	<div class="navbar-movil" :class="[activeMenu ? 'active' : '']">
		<div class="navbar-movil-header d-flex justify-content-between px-3">
			<router-link to="/" class="navbar-movil-link">
				<img alt="Tkambio" src="@/assets/logo.png" class="navbar-movil-logo" />
			</router-link>
			<div class="ico-action" @click="closeMenu">
				<Close />
			</div>
		</div>
		<div class="navbar-movil-menu">
			<ul class="navbar-movil-ul">
				<li class="navbar-movil-li">
					<router-link :to="{ path: '/', hash: '#' }" class="navbar-movil-link">
						Blog
					</router-link>
				</li>
				<li class="navbar-movil-li">
					<router-link :to="{ path: '/', hash: '#' }" class="navbar-movil-link">
						Promociones
					</router-link>
				</li>
				<li class="navbar-movil-li">
					<router-link :to="{ path: '/', hash: '#' }" class="navbar-movil-link">
						Preguntas frecuentes
					</router-link>
				</li>
				<li class="navbar-movil-li">
					<router-link :to="{ path: '/', hash: '#' }" class="navbar-movil-link"> Contáctanos </router-link>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import Close from "@/components/svg/Close";
import { mapActions, mapGetters } from "vuex";

export default {
	components: {
		Close,
	},
	methods: {
		closeMenu() {
			this.changeToggleMenu(false);
		},
		...mapActions({
			changeToggleMenu: "TOGGLE_MENU",
		}),
	},
	computed: {
		...mapGetters({
			activeMenu: "getActiveMenu",
		}),
	},
};
</script>

<style lang="scss">
.navbar-movil {
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background: #eeeeee;
	z-index: 99;
	width: 80%;
	transform: translateX(-100%);
	visibility: hidden;
	transition: transform 0.5s, visibility 0.5s;
	&.active {
		transform: translateX(0%);
		visibility: visible;
	}
	&-header {
		height: 65px;
		display: flex;
		align-items: center;
		justify-content: center;
		background: #2881ea;
	}
	&-logo {
		height: 25px;
		width: auto;
	}
	&-menu {
		margin-top: 2rem;
	}
	&-ul {
		padding: 0 1rem;
		list-style: none;
		margin: 0;
		text-align: left;
	}
	&-li {
		margin-bottom: 1rem;
	}
	&-link {
		font-size: 14px;
		color: #000;
		font-weight: 400;
	}
}
</style>
