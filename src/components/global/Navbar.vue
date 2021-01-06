<template>
	<div class="container-navbar component ov-loading">
		<div class="navbar">
			<div class="navbar-hamburguer">
				<div class="ico-me" @click="openMenu">
					<Menu />
				</div>
			</div>
			<div class="navbar-logo">
				<router-link to="/" class="navbar-link">
					<img alt="Tkambio" src="../../assets/logo.png" class="navbar-logo" />
				</router-link>
			</div>
			<div class="navbar-menu">
				<ul class="navbar-ul">
					<li class="navbar-li">
						<router-link :to="{ path: '/', hash: '#' }" class="navbar-link">
							Blog
						</router-link>
					</li>
					<li class="navbar-li">
						<router-link :to="{ path: '/', hash: '#' }" class="navbar-link">
							Promociones
						</router-link>
					</li>
					<li class="navbar-li">
						<router-link :to="{ path: '/', hash: '#' }" class="navbar-link">
							Preguntas frecuentes
						</router-link>
					</li>
					<li class="navbar-li">
						<router-link :to="{ path: '/', hash: '#' }" class="navbar-link"> Contáctanos <ArrowMenu /> </router-link>
					</li>
				</ul>
				<div class="navbar-content-singin">
					<div class="navbar-ico-login">
						<Login />
					</div>
					<a href="#" class="navbar-btn">
						<span>
							Iniciar sesión
						</span>
					</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Menu from "../svg/Menu";
import Login from "../svg/Login";
import ArrowMenu from "../svg/ArrowMenu";
import { mapActions } from "vuex";

export default {
	components: {
		Menu,
		Login,
		ArrowMenu,
	},
	name: "Navbar",
	methods: {
		openMenu() {
			this.changeToggleMenu(true);
		},
		...mapActions({
			changeToggleMenu: "TOGGLE_MENU",
		}),
	},
	computed: {},
};
</script>

<style lang="scss">
.container-navbar {
	max-width: 1140px;
	margin: 0 auto;
	@media (max-width: 768px) {
		padding: 0 1rem;
	}
}
.navbar {
	height: 100px;
	display: flex;
	align-items: center;
	margin-bottom: 60px;
	@media (max-width: 460px) {
		padding: 0.5rem 0rem !important;
		height: 65px;
		margin-bottom: 1rem;
	}
	a {
		&:hover {
			text-decoration: none;
		}
	}
	&-ico-login {
		display: none;
		@media (max-width: 460px) {
			display: flex;
		}
	}
	&-logo {
		width: 206px;
		@media (max-width: 460px) {
			width: 100%;
		}
	}
	&-ul {
		list-style: none;
		margin: 0;
		padding: 0;
		display: flex;
		@media (max-width: 768px) {
			display: none;
		}
	}
	&-li {
		display: flex;
		align-items: center;
		padding: 5px 16px;
		font-size: 15px;
		font-weight: 300;
		a {
			color: #fff;
			padding: 4px 0;
			position: relative;
			color: #fff;
			display: flex;
			align-items: center;
			justify-content: center;
			&:hover {
				color: #fff;
				&:before {
					transform: scaleX(1);
					transform-origin: left;
				}
			}
			&:before {
				content: "";
				position: absolute;
				bottom: 0px;
				left: 0;
				width: 100%;
				height: 2px;
				background: rgba(255, 255, 255, 1);
				transform: scaleX(0);
				transform-origin: right;
				transition: transform 0.2s ease-out;
			}
			svg {
				fill: white;
				stroke: white;
				margin-left: 10px;
			}
		}
	}

	&-menu {
		color: #fff;
		display: flex;
		a {
			color: #fff;
		}
	}
	&-btn {
		margin-left: 3rem;
		border: 1px solid #fff;
		height: 55px;
		display: flex;
		padding: 0 35px;
		border-radius: 3rem;
		align-items: center;
		font-size: 14px;
		line-height: 15px;
		transition: background-color 0.2s ease-out;
		&:hover {
			background-color: #fff;
			color: #396fe8;
		}
		@media (max-width: 460px) {
			display: none;
		}
	}
	&-hamburguer {
		display: none;
		@media (max-width: 768px) {
			display: flex;
		}
	}
	@media (max-width: 768px) {
		&-menu,
		&-logo,
		&-hamburguer {
			flex: 0 0 33%;
			@media (max-width: 460px) {
				flex: 0 0 33.3333%;
			}
		}

		&-logo {
			text-align: center;
		}
		&-menu {
			display: flex;
			justify-content: flex-end;
		}
	}
	@media (max-width: 460px) {
		&-ico-login,
		&-hamburguer {
			svg {
				width: 21px;
			}
		}
	}
}
</style>
