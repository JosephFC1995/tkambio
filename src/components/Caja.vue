<template>
	<div class="caja-change">
		<div class="caja-top">
			<div class="caja-top-content">
				<div class="countrys d-flex custom-row">
					<!-- Izquierda -->
					<div class="custom-col first text text-uppercase text-black" v-if="direction">
						<span> Sol peruano <FlagPeru /> </span>
					</div>
					<div class="custom-col first text text-uppercase text-black" v-else>
						<span> Dólares <FlagUSA /> </span>
					</div>

					<div class="custom-space"></div>
					<!-- Derecha -->
					<div class="custom-col second text text-uppercase text-black" v-if="direction">
						<span> Dólares <FlagUSA /> </span>
					</div>

					<div class="custom-col second text text-uppercase text-black" v-else>
						<span> Sol peruano <FlagPeru /> </span>
					</div>
				</div>
				<div class="count d-flex custom-row">
					<div class="custom-col first text-black p-2">
						<label class="label d-block" for="to"> Envias </label>
						<input type="text" class="input-change input-first" name="to" v-model.lazy="priceInit" id="to" v-money="format" @keyup="convertLeftToRight" />
						<!-- Top -->
						<div class="floating-country first text text-uppercase text-black" v-if="direction">
							<span> Sol peruano <FlagPeru /> </span>
						</div>

						<div class="floating-country first text text-uppercase text-black" v-else>
							<span> Dólares <FlagUSA /> </span>
						</div>
					</div>
					<div class="change custom-space d-flex align-items-center justify-content-center">
						<div class="btn-change" @click="actionDirectionCambio">
							<ButtonChange />
						</div>
					</div>
					<div class="custom-col second text-black  p-2">
						<label class="label d-block" for="from"> Recibes </label>
						<input type="text" class="input-change input-first" name="from" id="from" v-model.lazy="priceEnd" v-money="format" @keyup="convertRightToLeft" />
						<!-- Bottom -->
						<div class="floating-country second text text-uppercase text-black " v-if="direction">
							<span> Dólares <FlagUSA /> </span>
						</div>

						<div class="floating-country second text text-uppercase text-black " v-else>
							<span> Sol peruano <FlagPeru /> </span>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="caja-button">
			<div class="type-change">
				<span class="title"> Tipo de Cambio: </span>
				<span class="ml-1 venta-compra">
					<span :class="[!direction ? 'active' : '']">Compra: {{ tcambioCompra }}</span> |
					<span :class="[direction ? 'active' : '']">Venta: {{ tcambioVenta }}</span>
				</span>
			</div>
			<div class="set-cupp text-underline" style="cursor:pointer">¿Tienes un código promocional? Ingrésalo acá <Arrow /></div>
		</div>
		<div class="btn-floating">
			<a href="#" class="btn-primary">
				<span>
					¡A cambiar!
				</span>
			</a>
		</div>
	</div>
</template>

<script>
import FlagPeru from "../components/svg/FlagPeru";
import FlagUSA from "../components/svg/FlagUsa";
import ButtonChange from "../components/svg/ButtonChange";
import Arrow from "../components/svg/Arrow";
import { VMoney } from "v-money";
import { mapActions, mapGetters } from "vuex";

export default {
	components: {
		FlagPeru,
		FlagUSA,
		ButtonChange,
		Arrow,
	},
	data() {
		return {
			priceInit: 0,
			priceEnd: 0,
			format: {
				decimal: ".",
				thousands: ",",
				prefix: "",
				suffix: "",
				precision: 2,
				masked: false,
			},
		};
	},
	methods: {
		convertLeftToRight() {
			var amount = this.priceInit.replace(",", "");
			var newMount = 0;
			if (this.direction) {
				newMount = amount / this.tcambioVenta;
			} else {
				newMount = amount * this.tcambioCompra;
			}
			this.priceEnd = newMount.toFixed(2);
		},
		convertRightToLeft() {
			var amount = this.priceEnd.replace(",", "");
			var newMount = 0;
			if (this.direction) {
				newMount = amount * this.tcambioCompra;
			} else {
				newMount = amount / this.tcambioVenta;
			}
			this.priceInit = newMount.toFixed(2);
		},
		actionDirectionCambio() {
			// var tl = this.$gsap.timeline({ paused: true });
			// tl.to(".btn-change", {
			// 	rotation: "360deg",
			// 	ease: "power4.inOut",
			// });
			// tl.restart();
			this.animateRotate.restart();
			this.changeDirectionCambio();
		},
		...mapActions({
			changeDirectionCambio: "TOGGLE_DIRECTION_CAMBIO",
		}),
	},
	watch: {
		direction() {
			this.priceInit = 0;
			this.priceEnd = 0;
		},
	},
	computed: {
		...mapGetters({
			tcambioCompra: "getTCambioCompra",
			tcambioVenta: "getTCambioVenta",
			direction: "getDirectionCambio",
		}),
		animateRotate() {
			var tl = this.$gsap.timeline({ paused: true });
			return tl.to(".btn-change", {
				rotation: "360deg",
				ease: "power4.inOut",
			});
		},
	},
	directives: { money: VMoney },
};
</script>

<style lang="scss">
.caja {
	&-change {
		background: #eeeeee;
		border-radius: 15px;
		width: 80%;
		padding: 1rem;
		position: relative;
		padding-bottom: 35px;
		@media (max-width: 768px) {
			width: 100%;
			padding-bottom: 45px;
		}
		.btn {
			&-floating {
				position: absolute;
				left: 50%;
				transform: translateX(-50%);
				bottom: -20px;
				a {
					background: #ffbd12;
					border-radius: 50px;
					height: 45px;
					width: 200px;
					justify-content: center;
					font-style: normal;
					font-weight: normal;
					font-size: 16px;
					line-height: 17px;
					display: flex;
					align-items: center;
					text-align: center;
					color: #000000;
					z-index: 3;
				}
			}
		}
	}
	&-top {
		background: #ffffff;
		border-radius: 15px;
		padding: 23px 27px;
		margin-bottom: 19px;
		position: relative;
		@media (max-width: 768px) {
			padding: 20px;
		}
		&-content {
			.countrys {
				border-bottom: 1px solid rgba(0, 0, 0, 0.15);
				padding-bottom: 10px;
				margin-bottom: 10px;
				@media (max-width: 768px) {
					display: none !important;
				}
				.text {
					font-style: normal;
					font-weight: 300;
					font-size: 13px;
					line-height: 13px;
					display: flex;
					align-items: center;
					text-align: center;
					color: #000000;
					span {
						display: flex;
						align-items: center;
						svg {
							margin-left: 5px;
						}
					}
				}
			}
			.floating-country {
				display: none;
				position: absolute;
				font-style: normal;
				font-weight: 300;
				font-size: 13px;
				border: none !important;
				line-height: 13px;
				right: 0;
				top: 40%;
				align-items: center;
				span {
					display: flex;
					align-items: self-start;
				}
				svg {
					margin-left: 10px;
				}
				transform: translateY(-50%);
				@media (max-width: 768px) {
					display: flex;
				}
				&.second {
					top: 70%;
				}
			}
			.count {
				.first {
					@media (max-width: 768px) {
						border-bottom: 1px solid rgba(0, 0, 0, 0.15);
					}
				}
				label {
					font-style: normal;
					font-weight: 300;
					font-size: 15px;
					line-height: 16px;
					color: #000000;
					margin-bottom: 11px;
					text-transform: uppercase;
					@media (max-width: 768px) {
						font-weight: normal;
						font-size: 14px;
						line-height: 15px;
						text-transform: capitalize;
					}
				}
				input {
					font-style: normal;
					font-weight: 300;
					font-size: 35px;
					color: #000000;
					width: 95%;
					border: none;
					line-height: 1.2;
					text-decoration: underline;
					@media (max-width: 768px) {
						font-style: normal;
						font-weight: 300;
						font-size: 28px;
						line-height: 35px;
						width: 65%;
						outline: none;
					}
				}
			}
		}
		.btn {
			&-change {
				cursor: pointer;
			}
		}
	}
	&-button {
		text-align: center;
		z-index: 3;
		position: relative;
		.type-change {
			text-align: center;
			font-style: normal;
			font-weight: 300;
			font-size: 13px;
			line-height: 13px;
			display: flex;
			align-items: center;
			justify-content: center;
			text-align: center;
			margin-bottom: 17px;
			color: #000000;
			@media (max-width: 768px) {
				flex-wrap: wrap;
				font-size: 12px;
				line-height: 18px;
			}
			.title {
				display: block;
				@media (max-width: 768px) {
					flex: 0 0 100%;
					margin-bottom: 7px;
				}
			}
			.venta-compra {
				.active {
					font-weight: 600;
					text-decoration: underline;
				}
			}
		}
		.set-cupp {
			font-style: normal;
			font-weight: 300;
			font-size: 10px;
			line-height: 18px;
			display: flex;
			align-items: center;
			justify-content: center;
			text-align: center;
			text-decoration-line: underline;
			color: #000000;
		}
	}
}
</style>

<style lang="scss">
.custom {
	&-row {
		@media (max-width: 768px) {
			flex-direction: column;
		}
	}
	&-col {
		flex: 1;
		position: relative;
	}
	&-space {
		flex: 0 0 100px;
		@media (max-width: 768px) {
			position: absolute;
			top: 50%;
			transform: translateY(-50%);
			right: 1rem;
		}
	}
}
</style>
