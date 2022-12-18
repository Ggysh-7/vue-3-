<template>
    <div class="plantablenav">
        <div class="left">
            <div class="img" :style="{
                width: '178px',
                height: '128px',
                background: `url(${require('@/assets/images/plan/night.jpg')})`,
                backgroundSize: '100% 100%',
                borderRadius: '8px',
            }"></div>
        </div>
        <div class="right">

        </div>
    </div>
</template>

<script>
export default {
    components: {},
    props: {},
};
</script>
<style >
.plantablenav {
    width: 100%;
    min-width: 1000px;
    padding: 8px 16px;
    border-radius: 4px;
    background-color: rgb(255, 255, 255);
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.plantablenav .left {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px;
    border-radius: 8px;
    background-color: rgba(114, 182, 250, 0.3);
}

.plantablenav .right {
    display: flex;
    justify-content: center;
    align-items: center
}
</style>