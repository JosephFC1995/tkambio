<template>
	<div class="overlay" :class="[activeMenu ? 'active' : '']" @click="closeMenu"></div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
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
.overlay {
	background: #0000008a;
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	z-index: 98;
	opacity: 0;
	visibility: hidden;
	transition: opacity 0.5s, visibility 0.5s;
	&.active {
		opacity: 1;
		visibility: visible;
	}
}
</style>
