<template>
  <div class="qrcodebox">
    <div class="qrcodebox_main">
      <div class="qrcodebox_main_up">
        <div class="qrcodebox_main_up_left">
          <img src="@/assets/qrcode/icon(6).svg" alt="二维码" />
          <span>二维码</span>
        </div>
        <!-- <div class="qrcodebox_main_up_right" @click="close">
          <img src="@/assets/qrcode/icon(1).svg" alt="close" />
        </div> -->
      </div>
      <div class="qrcodebox_main_in">
        <div class="qrcodebox_main_in_left">
          <div class="qrcodebox_main_in_left_selct">
            <div :class="{ activate: selct == 1 }" @click="change(1)">
              上传二维码
            </div>
            <div :class="{ activate: selct == 2 }" @click="change(2)">
              网址二维码
            </div>
          </div>
          <div class="qrcodebox_main_in_left_content">
            <div class="qrcodebox_main_in_left_content_qr" v-show="selct == 1">
              <div class="showqrcode" v-if="qrimg.length">
                <div>
                  <vue-qr
                    :correctLevel="3"
                    :text="qrimg"
                    :callback="test"
                    qid="testid"
                    :size="size"
                    :margin="margin"
                    :colorDark="colorDark"
                    :colorLight="colorLight"
                    :bgSrc="bgSrc"
                    :gifBgSrc="gifBgSrc"
                    :backgroundColor="backgroundColor"
                    :backgroundDimming="backgroundDimming"
                    :logoSrc="logoSrc"
                    :logoScale="logoScale"
                    :logoMargin="logoMargin"
                    :logoBackgroundColor="logoBackgroundColor"
                    :logoCornerRadius="logoCornerRadius"
                    :whiteMargin="whiteMargin"
                    :dotScale="dotScale"
                    :autoColor="autoColor"
                    :components="ComponentOptions"
                  ></vue-qr>
                </div>
                <div @click="qrimg = ''">修改图片</div>
              </div>

              <div
                class="qrcodebox_main_in_left_content_qr_up"
                v-show="qrimg.length == 0"
                @click="getFile"
              >
                <div class="qrcodebox_main_in_left_content_qr_up_1">
                  <img src="@/assets/qrcode/icon(5).svg" alt="" />
                  <p>请先上传二维码</p>
                </div>
              </div>
              <div
                class="qrcodebox_main_in_left_content_qr_down"
                v-show="qrimg.length == 0"
                @click="getFile"
              >
                上传二维码
              </div>
            </div>

            <div class="qrcodebox_main_in_left_content_url" v-show="selct == 2">
              <div class="showqrcode" v-if="qrurl.length && qrurlshow">
                <div>
                  <vue-qr
                    :correctLevel="3"
                    :text="qrurl"
                    :callback="test"
                    qid="testid"
                    :size="size"
                    :margin="margin"
                    :colorDark="colorDark"
                    :colorLight="colorLight"
                    :bgSrc="bgSrc"
                    :gifBgSrc="gifBgSrc"
                    :backgroundColor="backgroundColor"
                    :backgroundDimming="backgroundDimming"
                    :logoSrc="logoSrc"
                    :logoScale="logoScale"
                    :logoMargin="logoMargin"
                    :logoBackgroundColor="logoBackgroundColor"
                    :logoCornerRadius="logoCornerRadius"
                    :whiteMargin="whiteMargin"
                    :dotScale="dotScale"
                    :autoColor="autoColor"
                    :components="ComponentOptions"
                  ></vue-qr>
                </div>
                <div @click="qrurlshow = false">修改地址</div>
              </div>

              <textarea
                class="textarea"
                cols="30"
                rows="10"
                placeholder="请输入网址"
                v-model="qrurl"
                v-show="qrurl == 0 || qrurlshow == false"
              ></textarea>
              <div
                v-show="qrurl == 0 || qrurlshow == false"
                class="qrcodebox_main_in_left_content_url_down"
                @click="qrurlshow = true"
              >
                确定
              </div>
            </div>
          </div>
        </div>
        <div class="qrcodebox_main_in_right">
          <div class="qrcodebox_main_in_right_selct">
            <div :class="{ activate: selctstyle == 1 }" @click="changestyle(1)">
              公共样式
            </div>
            <div :class="{ activate: selctstyle == 2 }" @click="changestyle(2)">
              颜色
            </div>
            <div :class="{ activate: selctstyle == 3 }" @click="changestyle(3)">
              外框
            </div>
            <div :class="{ activate: selctstyle == 4 }" @click="changestyle(4)">
              上传logo
            </div>
            <div :class="{ activate: selctstyle == 5 }" @click="changestyle(5)">
              码点
            </div>
            <div :class="{ activate: selctstyle == 6 }" @click="changestyle(6)">
              高级设置
            </div>
          </div>
          <div v-show="selctstyle == 1" class="qrcodebox_main_in_right_pub">
            <div class="activate">默认</div>
          </div>
          <div v-show="selctstyle == 2" class="mt10">
            <el-form :model="data" ref="ruleFormRef">
              <el-form-item label="实点的颜色" prop="colorDark">
                <el-color-picker v-model="colorDark" />
              </el-form-item>
              <el-form-item label="空白区的颜色" prop="colorLight">
                <el-color-picker v-model="colorLight" />
              </el-form-item>
              <!-- <el-form-item label="背景色" prop="backgroundColor">
                <el-color-picker v-model="backgroundColor" />
              </el-form-item>
              <el-form-item label="叠加在背景色上的" prop="backgroundDimming">
                <el-color-picker v-model="backgroundDimming" />
              </el-form-item> -->
            </el-form>
          </div>
          <div v-show="selctstyle == 3" class="qrcodebox_main_in_right_pub">
            <div class="activate">暂无功能</div>
          </div>
          <div v-show="selctstyle == 4" class="qrcodebox_main_in_right_logo">
            <div class="qrcodebox_main_in_right_logo_1">
              <span>上传logo:</span>
              <span v-show="!logoSrc" @click="getlogoFile">上传logo</span>
              <div
                class="qrcodebox_main_in_right_logo_1_state"
                v-show="logoSrc"
              >
                <img :src="logoSrc" alt="" />
                <span @click="getlogoFile">更换logo</span>
                <span @click="logoSrc = ''">移除logo</span>
              </div>
            </div>
            <div class="qrcodebox_main_in_right_logo_2">
              <img
                src="https://pcdn.51meteor.com/uploads/20231026/1869c470f33601df85f2b5208467252c.png"
                alt=""
                @click="
                  carvas(
                    'https://pcdn.51meteor.com/uploads/20231026/1869c470f33601df85f2b5208467252c.png'
                  )
                "
              />
              <img
                src="https://pcdn.51meteor.com/uploads/20231026/0bf9d5606dfda73237d50098b7417a78.png"
                alt=""
                @click="
                  carvas(
                    'https://pcdn.51meteor.com/uploads/20231026/0bf9d5606dfda73237d50098b7417a78.png'
                  )
                "
              />
              <img
                src="https://pcdn.51meteor.com/uploads/20231026/be65e42b44f0f74a1ebfdfa42d934338.png"
                alt=""
                @click="
                  carvas(
                    'https://pcdn.51meteor.com/uploads/20231026/be65e42b44f0f74a1ebfdfa42d934338.png'
                  )
                "
              />
              <img
                src="https://pcdn.51meteor.com/uploads/20231026/f44d92eec9532f88e3de36c6cf0834e6.png"
                alt=""
                @click="
                  carvas(
                    'https://pcdn.51meteor.com/uploads/20231026/f44d92eec9532f88e3de36c6cf0834e6.png'
                  )
                "
              />
              <img
                src="https://pcdn.51meteor.com/uploads/20231026/ccd914d67ce4f247234ccfe777aecf1d.png"
                alt=""
                @click="
                  carvas(
                    'https://pcdn.51meteor.com/uploads/20231026/ccd914d67ce4f247234ccfe777aecf1d.png'
                  )
                "
              />
              <img
                src="https://pcdn.51meteor.com/uploads/20231026/6560a910b86453fdf8480cbd00789d75.png"
                alt=""
                @click="
                  carvas(
                    'https://pcdn.51meteor.com/uploads/20231026/6560a910b86453fdf8480cbd00789d75.png'
                  )
                "
              />
            </div>
            <div class="qrcodebox_main_in_right_logo_3">
              <span>logo效果:</span>
              <span>原图</span>
            </div>
          </div>
          <div v-show="selctstyle == 5" class="qrcodebox_main_in_right_pub">
            <div class="activate">暂无功能</div>
          </div>
          <div v-show="selctstyle == 6" class="mt10">
            <el-form :model="data" ref="ruleFormRef">
              <el-form-item label="边距" prop="margin">
                <el-input-number v-model="margin" :min="0" :max="100" />
              </el-form-item>
            </el-form>
          </div>
        </div>
      </div>
      <div class="qrcodebox_main_down">
        <div
          class="qrcodebox_main_down_reight"
          @click="uploadqr"
          :class="{ activatecolor: !base64 }"
        >
          <img src="@/assets/qrcode/icon(7).svg" alt="" />
          <span>下载</span>
        </div>
      </div>
    </div>
    <input
      type="file"
      ref="logofile"
      style="display: none"
      accept="image/*"
      @change="logoFileUpload($event)"
    />
    <input
      type="file"
      ref="file"
      style="display: none"
      accept="image/*"
      @change="handleFileUpload($event)"
    />
  </div>
</template>

<script setup>
import { ref, reactive, toRefs } from "vue";
import vueQr from "vue-qr/src/packages/vue-qr.vue";
import { getQrUrl } from "@/utils/geturlcode";
const ruleFormRef = ref(null);
const file = ref();
const logofile = ref();
const data = reactive({
  base64: "", //返回值
  selct: 2,
  size: "252",
  margin: 0, //边距
  qrimg: "",
  qrurl: "",
  qrurlshow: false,
  colorDark: "#000000", //实点颜色
  colorLight: "#fff", //colorLight
  bgSrc: "", //欲嵌入的背景图地址
  gifBgSrc: "", //欲嵌入的背景图 gif 地址,设置后普通的背景图将失效。设置此选项会影响性能
  backgroundColor: "#FFF", //背景色
  backgroundDimming: "", //叠加在背景图上的颜色, 在解码有难度的时有一定帮助
  logoSrc: "", //嵌入至二维码中心的 LOGO 地址
  logoScale: "1", // 用于计算 LOGO 大小的值
  logoMargin: "0", //LOGO 标识周围的空白边框, 默认为0
  logoBackgroundColor: "", //Logo 背景色,需要设置
  logoCornerRadius: 0, //LOGO 标识及其边框的圆角半径, 默认为0
  whiteMargin: false, //若设为 true, 背景图外将绘制白色边框
  dotScale: 1, //数据区域点缩小比例,默认为1
  autoColor: true, //若为 true, 背景图的主要颜色将作为实点的颜色, 即 colorDark,默认 true
  ComponentOptions: {
    data: {
      scale: 1,
    },
    timing: {
      scale: 1,
      protectors: false,
    },
    alignment: {
      scale: 1,
      protectors: false,
    },
    cornerAlignment: {
      scale: 1,
      protectors: true,
    },
  },
  selctstyle: 4,
});

const {
  base64,
  selct,
  size,
  margin,
  qrimg,
  qrurl,
  qrurlshow,
  colorDark,
  colorLight,
  bgSrc,
  gifBgSrc,
  backgroundColor,
  backgroundDimming,
  logoSrc,
  logoScale,
  logoMargin,
  logoBackgroundColor,
  logoCornerRadius,
  whiteMargin,
  dotScale,
  autoColor,
  ComponentOptions,
  selctstyle,
} = toRefs(data);
function test(dataUrl, id) {
  base64.value = dataUrl;
  console.log(dataUrl, id);
}
function change(change) {
  selct.value = change;
}
// 打开文件
function getFile() {
  file.value.click();
}
// 获取文件
async function handleFileUpload(event) {
  console.log(event.target.files[0]);
  const data = await getQrUrl(event.target.files[0]);
  if (data) {
    qrimg.value = data.data;
  } else {
    alert("请上传二维码");
  }
}
function changestyle(change) {
  selctstyle.value = change;
}
// 打开文件
function getlogoFile() {
  logofile.value.click();
}
async function logoFileUpload(event) {
  fileToDataURL(event.target.files[0]);
}
// 转换成bese64
function fileToDataURL(file) {
  let reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = function (e) {
    logoSrc.value = reader.result;
  };
}
async function carvas(url) {
  let data = await url2Base64(url);
  logoSrc.value = data;
}
// 利用canvas转换为bese64
function url2Base64(url, type = "image/jpeg") {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const canvas = document.createElement("canvas");
    img.crossOrigin = "anonymous";
    img.onload = function () {
      const width = img.width;
      const height = img.height;
      canvas.width = width;
      canvas.height = height;

      const ctx = canvas.getContext("2d");
      ctx.fillStyle = "white";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, width, height);
      const base64 = canvas.toDataURL(type);
      resolve(base64);
    };
    img.onerror = function () {
      reject(new Error("message"));
    };
    img.src = url;
  });
}

function uploadqr(params) {
  // 创建一个链接元素
  let a = document.createElement("a");
  // 设置链接的下载属性，例如文件名
  a.download = "uploadqr.png"; // 替换 "your_filename.png" 为你想要的文件名
  // 创建一个数据URL，将QR代码的数据放在这个URL中
  // 这里假设你已经有了QR代码的数据，将其替换为实际数据
  let qrCodeData = base64.value; // 替换为QR代码数据的实际值
  // 设置链接的href属性为数据URL
  a.href = qrCodeData;
  // 模拟点击链接以触发下载
  a.click();
}
const resetForm = (formEl) => {
  console.log(formEl);
  if (!formEl) return;
  formEl.resetFields();
};
</script>

<style lang="scss" scoped>
.qrcodebox {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9;
  .qrcodebox_main {
    width: 1096px;
    height: 648px;
    background: #ffffff;
    border-radius: 10px;
    overflow: hidden;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    .qrcodebox_main_up {
      height: 56px;
      background: #ffffff;
      box-shadow: inset 0px -1px 0px 0px #e9e8e8;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 10px;
      .qrcodebox_main_up_left {
        display: flex;
        align-items: center;
        span {
          font-size: 16px;
          font-weight: 400;
          color: #202020;
          margin: 0 5px;
        }
      }
      .qrcodebox_main_up_right {
        display: flex;
        align-items: center;
        padding: 0 10px;
      }
    }
    .qrcodebox_main_in {
      height: 540px;
      display: flex;
      justify-content: space-between;
      .qrcodebox_main_in_left {
        width: 340px;
        height: 423px;
        background: #ffffff;
        box-shadow: 0px 2px 20px 0px #ededed;
        .qrcodebox_main_in_left_selct {
          display: flex;
          justify-content: space-between;
          cursor: pointer;
          div {
            width: 170px;
            height: 45px;
            background: #f4f5f9;
            text-align: center;
            line-height: 45px;
            font-size: 16px;
            font-weight: 400;
            color: #202020;
            position: relative;
          }
          .activate {
            color: #fe631d;
            background-color: #ffffff;
            &::before {
              content: " ";
              position: absolute;
              left: 50%;
              transform: translateX(-50%);
              bottom: 0;
              width: 40%;
              height: 2px;
              background-color: #fe631d;
            }
          }
        }
        .qrcodebox_main_in_left_content {
          .qrcodebox_main_in_left_content_qr {
            .showqrcode {
              div:nth-child(1) {
                width: 252px;
                height: 252px;
                border: 1px dashed #979797;
                margin: 30px auto;
              }
              div:nth-child(2) {
                width: 256px;
                height: 34px;
                background: #ffffff;
                border-radius: 6px;
                border: 1px solid #e9e8e8;
                font-size: 16px;
                font-weight: 400;
                color: #5f5f5f;
                margin: 0 auto;
                line-height: 34px;
                cursor: pointer;
                text-align: center;
              }
            }
            .qrcodebox_main_in_left_content_qr_up {
              width: 256px;
              height: 256px;
              border-radius: 4px;
              border: 1px dashed #979797;
              margin: 28px auto;
              position: relative;
              cursor: pointer;
              &:hover {
                color: #fe631d;
                border-color: #fe631d;
                img {
                  filter: brightness(150%) saturate(200%) hue-rotate(90deg);
                }
              }
              .qrcodebox_main_in_left_content_qr_up_1 {
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
                img {
                  display: block;
                  margin: 0 auto;
                }
              }
            }
            .qrcodebox_main_in_left_content_qr_down {
              width: 256px;
              height: 34px;
              background: #fe631d;
              border-radius: 6px;
              font-size: 16px;
              font-weight: 400;
              color: #ffffff;
              text-align: center;
              line-height: 34px;
              margin: 0 auto;
              cursor: pointer;
            }
          }
          .qrcodebox_main_in_left_content_url {
            .textarea {
              width: 256px;
              height: 119px;
              border-radius: 4px;
              border: 1px solid #979797;
              margin: 27px auto;
              resize: none;
              display: block;
              &:focus {
                outline: none;
              }
            }
            .qrcodebox_main_in_left_content_url_down {
              width: 256px;
              height: 34px;
              background: #fe631d;
              border-radius: 6px;
              font-size: 16px;
              font-weight: 400;
              color: #ffffff;
              text-align: center;
              line-height: 34px;
              margin: 0 auto;
              cursor: pointer;
            }
            .showqrcode {
              div:nth-child(1) {
                width: 252px;
                height: 252px;
                border: 1px dashed #979797;
                margin: 30px auto;
              }
              div:nth-child(2) {
                width: 256px;
                height: 34px;
                background: #ffffff;
                border-radius: 6px;
                border: 1px solid #e9e8e8;
                font-size: 16px;
                font-weight: 400;
                color: #5f5f5f;
                margin: 0 auto;
                line-height: 34px;
                cursor: pointer;
                text-align: center;
              }
            }
          }
        }
      }
      .qrcodebox_main_in_right {
        width: 721px;
        height: 530px;
        background: #ffffff;
        border-radius: 0px 0px 10px 0px;
        box-shadow: 2px 0px 20px 0px #ededed;
        .qrcodebox_main_in_right_selct {
          display: flex;
          cursor: pointer;
          div {
            height: 45px;
            background-color: #ffffff;
            text-align: center;
            line-height: 45px;
            font-size: 16px;
            font-weight: 400;
            color: #202020;
            position: relative;
            padding: 0 10px;
          }
          .activate {
            color: #fe631d;
            &::before {
              content: " ";
              position: absolute;
              left: 50%;
              transform: translateX(-50%);
              bottom: 0;
              width: 40%;
              height: 2px;
              background-color: #fe631d;
            }
          }
        }
        .qrcodebox_main_in_right_pub {
          padding: 20px;
          div {
            width: 120px;
            height: 119px;
            border-radius: 4px;
            border: 1px solid #e9e8e8;
            font-size: 14px;
            font-weight: 400;
            color: #fe631d;
            line-height: 119px;
            text-align: center;
          }
          .activate {
            border: 1px solid #ff4f00;
          }
        }
        .qrcodebox_main_in_right_logo {
          padding: 40px;
          .qrcodebox_main_in_right_logo_1 {
            display: flex;
            align-items: center;

            span:nth-child(1) {
              font-size: 14px;
              font-weight: 400;
              color: #515151;
            }
            span:nth-child(2) {
              width: 85px;
              height: 31px;
              background: #ffffff;
              border-radius: 6px;
              border: 1px solid #e9e8e8;
              font-size: 14px;
              font-weight: 400;
              color: #5f5f5f;
              display: block;
              line-height: 31px;
              text-align: center;
              margin-left: 10px;
              cursor: pointer;
            }
            .qrcodebox_main_in_right_logo_1_state {
              display: flex;
              align-items: center;
              img {
                width: 60px;
                height: 60px;
              }
              span {
                width: 85px;
                height: 31px;
                background: #ffffff;
                border-radius: 6px;
                border: 1px solid #e9e8e8;
                font-size: 14px;
                font-weight: 400;
                color: #5f5f5f;
                display: block;
                line-height: 31px;
                text-align: center;
                margin-left: 10px;
                cursor: pointer;
              }
            }
          }
          .qrcodebox_main_in_right_logo_2 {
            margin: 20px 60px;
            display: flex;
            img {
              width: 40px;
              height: 40px;
              margin: 0 10px;
            }
          }
          .qrcodebox_main_in_right_logo_3 {
            display: flex;
            align-items: center;

            span:nth-child(1) {
              font-size: 14px;
              font-weight: 400;
              color: #515151;
            }
            span:nth-child(2) {
              width: 85px;
              height: 31px;
              background: #ffffff;
              border-radius: 6px;
              border: 1px solid #e9e8e8;
              font-size: 14px;
              font-weight: 400;
              color: #fe631d;
              display: block;
              line-height: 31px;
              text-align: center;
              margin-left: 10px;
              cursor: pointer;
              border: 1px solid #fe631d;
            }
            span:nth-child(3) {
              width: 85px;
              height: 31px;
              background: #ffffff;
              border-radius: 6px;
              border: 1px solid #e9e8e8;
              font-size: 14px;
              font-weight: 400;
              color: #5f5f5f;
              display: block;
              line-height: 31px;
              text-align: center;
              margin-left: 10px;
              cursor: pointer;
            }
            span:nth-child(4) {
              width: 85px;
              height: 31px;
              background: #ffffff;
              border-radius: 6px;
              border: 1px solid #e9e8e8;
              font-size: 14px;
              font-weight: 400;
              color: #5f5f5f;
              display: block;
              line-height: 31px;
              text-align: center;
              margin-left: 10px;
              cursor: pointer;
            }
          }
        }
      }
    }
    .qrcodebox_main_down {
      height: 56px;
      background: #ffffff;
      box-shadow: 0px -1px 0px 0px #e9e8e8;
      position: relative;

      .qrcodebox_main_down_reight {
        width: 81px;
        height: 31px;
        background: #ffffff;
        border-radius: 6px;
        border: 1px solid #e9e8e8;
        font-size: 14px;
        font-weight: 400;
        color: #333030;
        position: absolute;
        right: 20px;
        top: 50%;
        transform: translateY(-50%);
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        img {
          margin: 0 5px;
        }
      }
      .activatecolor {
        color: #e9e8e8 !important;
      }
    }
  }
}
</style>
