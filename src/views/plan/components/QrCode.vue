<template>
    <a-modal :visible="codevisible" :footer="null" :closable="closableQR" wrapClassName="codeModal" centered="true"
        :zIndex="999" @cancel="closeModal">
        <div class="header">
            <div class="icon"></div>
            <span>二维码</span>
            <div class="closemodal" @click="closeModal"></div>
        </div>
        <div class="body">
            <img src="@/assets/images/plan/QR.png" alt="">
        </div>
        <div class="footer">
            <span style="margin-left: 48px">下载二维码</span>
            <div class="btn" @click="downloadQr(200)">
                <div class="btntext">200*200</div>
            </div>
            <div class="btn" @click="downloadQr(400)">
                <div class="btntext">400*400</div>
            </div>
        </div>
    </a-modal>
</template>

<script>
import { reactive, toRefs } from 'vue';
export default {
    name: "qrCode",
    components: {},
    props: {
        codevisible: {
            type: Boolean,
            deafult: false,
        }
    },
    setup(props, ctx) {
        const state = reactive({
            codevisible: false,
            closableQR: false,
            qrcodeSize: 0,
        })
        const closeModal = () => {
            ctx.emit("update:codevisible", false);
            state.qrcodeSize = 0;
        }
        const downloadQr = (num) => {
            state.qrcodeSize = num;
            // html2canvas(
            //     document.querySelectorAll(".downloadCode")[Number(props.index)],
            //     {
            //         useCORS: true, //支持图片跨域
            //     }
            // ).then((canvas) => {
            //     // console.log("canvas", canvas, canvas.width, canvas.style.width);
            //     let filename = `${new Date().getTime()}.png`;
            //     let imageUrl = canvas.toDataURL("image/png");
            //     let a = document.createElement("a");
            //     a.style.display = "none";
            //     a.download = filename;
            //     a.href = imageUrl;
            //     document.body.appendChild(a);
            //     a.click();
            // });
        }
        return {
            ...toRefs(state),
            closeModal,
            downloadQr,
        }
    }
};
</script>
<style scoped>
.codeModal {
    width: 100%;
    height: 350px;
    position: relative;
}

.codeModal .header {
    display: flex;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    width: calc(100%);
    height: 48px;
    background: linear-gradient(rgba(78, 166, 255, 0.3) 0%,
            rgba(78, 166, 255, 0) 100%);
    padding-top: 15px;
    padding-left: 20px;
    font-size: 16px;
}

.codeModal .header .icon {
    width: 20px;
    height: 20px;
    margin-right: 10px;
    background-image: url(@/assets/images/plan/ma.png);
    background-size: 100% 100%;
}

.codeModal .header .closemodal {
    position: absolute;
    right: 28px;
    cursor: pointer;
    width: 25px;
    height: 25px;
    background-image: url(@/assets/images/common/close.png);
    background-size: 100% 100%;
}

.codeModal .body {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
    margin-bottom: 28px;
}

.codeModal .body img {
    width: 200px;
    height: 200px;
    background-size: 100% 100%;
}

.codeModal .footer {
    display: flex;
    align-items: center;
}

.codeModal .footer .btn {
    margin-left: 18px;
    background-color: #409eff;
    color: #ffffff;
    border-radius: 4px;
    padding: 5px 18px;
    cursor: pointer;
}
</style>