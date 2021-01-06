<template>
	<div class="home content-viewport  ov-loading">
		<div class="content-home">
			<div class="row">
				<div class="col-12 col-md-5 col-lg-4">
					<div class="content-left">
						<h1 class="title">
							Sé tu propio cambista.
						</h1>
						<h5>
							Seguro, rápido y al mejor cambio.
						</h5>
						<h6>
							Inscritos en la Superintendencia de Banca, Seguros y AFP.
						</h6>
						<div class="btn-section">
							<a href="#" class="btn-outline">
								Crear cuenta
							</a>
							<a href="#" class="btn-ghost">
								¿Cómo funciona?
							</a>
						</div>
					</div>
				</div>
				<div class="col-12 col-md-7 col-lg-8">
					<div class="content-right">
						<Caja />
					</div>
				</div>
			</div>
			<Illustration />
		</div>
	</div>
</template>

<script>
import Caja from "../components/Caja";
import Illustration from "../components/svg/Illustration";
import { mapActions } from "vuex";

export default {
	name: "Home",
	components: {
		Caja,
		Illustration,
	},
	methods: {
		...mapActions({
			getTipoCambio: "GET_TIPO_CAMBIO",
		}),
	},
	mounted() {
		this.getTipoCambio();
		var tl = this.$gsap.timeline({ paused: true, delay: 1 });
		tl.fromTo(
			"#loading-logo",
			{
				autoAlpha: 1,
			},
			{
				autoAlpha: 0,
				visibility: "hidden",
				ease: "power4.inOut",
			}
		)
			.fromTo(
				"#waves",
				{
					scaleX: 4,
					scaleY: 4,
				},
				{
					scaleX: 1,
					scaleY: 1,
					duration: 1.1,
					ease: "power4.inOut",
				}
			)

			.fromTo(
				".container-navbar",
				{
					autoAlpha: 0,
					y: -40,
				},
				{
					autoAlpha: 1,
					y: 0,
					duration: 1.1,
					ease: "power4.inOut",
				}
			)
			.to(".content-viewport", {
				autoAlpha: 1,
				duration: 1.1,
				ease: "power4.inOut",
			})
			.fromTo(
				".footer",
				{
					autoAlpha: 0,
					yPercent: 40,
					ease: "power4.inOut",
				},
				{
					autoAlpha: 1,
					duration: 1.1,
					yPercent: 0,
					ease: "power4.inOut",
				}
			)
			.fromTo(
				"#illustration",
				{
					autoAlpha: 0,
					y: 40,
					x: 40,
				},
				{
					autoAlpha: 1,
					duration: 1.1,
					y: 0,
					x: 0,
					ease: "power4.inOut",
				}
			)
			.to(".screen-loading", {
				className: "-=app-content",
			});
		tl.play();
	},
};
</script>

<style lang="scss">
.content {
	&-left {
		h1 {
			font-style: normal;
			font-weight: bold;
			font-size: 50px;
			line-height: 60px;
			color: #ffffff;
			margin-bottom: 21px;
			font-family: "Pier Sans";
			@media (max-width: 769px) {
				font-weight: bold;
				font-size: 38px;
				line-height: 40px;
			}
			@media (max-width: 460px) {
				font-weight: bold;
				font-size: 30px;
				line-height: 36px;
				text-align: center;
				margin-bottom: 10px;
			}
		}
		h5 {
			font-weight: 300;
			font-size: 20px;
			line-height: 21px;
			display: flex;
			align-items: center;
			color: #ffffff;
			margin-bottom: 11px;
			@media (max-width: 769px) {
				font-weight: 300;
				font-size: 16px;
				line-height: 20px;
			}
			@media (max-width: 460px) {
				font-weight: 300;
				font-size: 16px;
				line-height: 23px;
				text-align: center;
				justify-content: center;
			}
		}
		h6 {
			font-style: normal;
			font-weight: 300;
			font-size: 11px;
			line-height: 11px;
			display: flex;
			align-items: center;
			color: #ffffff;
			margin-bottom: 28px;
			@media (max-width: 769px) {
				font-weight: 300;
				font-size: 9px;
				line-height: 13px;
			}
			@media (max-width: 460px) {
				display: none;
			}
		}
		.btn {
			&-section {
				display: inline-grid;
			}
			&-outline {
				border: 1px solid #fff;
				height: 55px;
				display: flex;
				padding: 0 35px;
				border-radius: 3rem;
				align-items: center;
				font-size: 14px;
				line-height: 15px;
				display: flex;
				align-items: center;
				text-align: center;
				line-height: 15px;
				transition: background-color 0.2s ease-out;
				color: #fff;
				margin-bottom: 9px;
				&:hover {
					background-color: #fff;
					color: #396fe8;
				}
				@media (max-width: 460px) {
					display: none;
				}
			}
			&-ghost {
				font-style: normal;
				font-weight: 300;
				font-size: 12px;
				line-height: 12px;
				display: flex;
				align-items: center;
				text-align: center;
				text-decoration-line: underline;
				color: #ffffff;
				margin-left: 10px;
				@media (max-width: 460px) {
					display: none;
				}
			}
		}
	}
}
</style>
