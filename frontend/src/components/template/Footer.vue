<template>
	<footer class="footer">
		<span>Copyright <strong>Pedro Victor Vieira Gontijo</strong> © 2019</span>
	</footer>
</template>

<script>
export default {
	name: "Footer"
}
</script>

<style>
    .footer{
        grid-area: footer;
        background-color: #DDD;

        display: flex;
        align-items: flex-end;
        justify-content: center;
        padding-right: 10px;
    }
</style>