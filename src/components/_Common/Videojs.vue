<!--
 * @Author: Billy
 * @Date: 2020-10-21 10:00:00
 * @LastEditors: aqi
 * @LastEditTime: 2021-09-09 17:13:35
 * @Description: 视频播放核心组件
-->

<template>
  <div ref="vContainer" :style="{ height: height + 'px' }" class="videojs">
    <video
      ref="videoPlayer"
      :key="key"
      class="my-video video-js vjs-default-skin"
      :style="{ 'object-fit': objectFit }"
    ></video>
  </div>
</template>

<script>
/**
 * @see video.js官网 https://videojs.com/
 * @see 在vue中用法 https://docs.videojs.com/tutorial-vue.html
 * @see 播放flash,rtmp https://blog.videojs.com/video-js-removes-flash-from-core-player/
 */

import videojs from "video.js";
// import videojsFlash from "videojs-flash";
import "video.js/dist/video-js.css";

// import "videojs_snapshot_new/dist/plugins/videojs.imageCapture.js";
// import "videojs_snapshot_new/dist/videojs-snapshot.js";
// import "videojs_snapshot_new/src/css/videojs.snapshot.css"

let WIDTH_DEFAULT = 800;
let HEIGHT_DEFAULT = 450;

export default {
  // 视频源src和视频格式type必传
  props: {
    // 视频源
    src: { type: String, required: true },
    // 视频格式，可传入flv、hls、mp4、ogg、webm等格式，会通过initType转化为source标签里面对应的type
    type: { type: String, required: true },
    // 自动播放（非静音状态无法自动播放）
    autoplay: { type: Boolean, default: true },
    // 静音
    muted: { type: Boolean, default: true },
    // 控制条
    controls: { type: Boolean, default: true },
    // 循环播放
    loop: { type: Boolean, default: false },
    // 背景图片地址
    coverAddr: { type: String },
    // 视频宽度
    // width: { type: Number, default: WIDTH_DEFAULT },
    // 视频高度
    height: { type: Number, default: HEIGHT_DEFAULT },
    objectFit: { type: String, default: "" },
  },

  data() {
    return {
      key: "player-" + new Date().getTime(),
      player: null,
    };
  },

  computed: {
    exactType: function () {
      let _exactType;
      switch (this.type.toUpperCase()) {
        case "FLV":
          _exactType = "video/x-flv";
          break;
        case "HLS":
          _exactType = "application/x-mpegURL";
          break;
        case "MP4":
          _exactType = "video/mp4";
          break;
        case "OGG":
          _exactType = "video/ogg";
          break;
        case "WEBM":
          _exactType = "video/webm";
          break;
        case "RTMP":
          _exactType = "rtmp/flv";
          break;
      }
      return _exactType;
    },
  },

  watch: {
    // 监听视频源，一旦有变化就刷新播放器
    src: function () {
      this.$_video_changeConfig();
    },

    // 监听视频格式，一旦有变化就刷新播放器
    type: function () {
      this.$_video_changeConfig();
    },
  },

  mounted() {
    this.$_video_init();
    this.player.on("click", () => {
      this.$emit("onClickPlayer", this.src);
    });
  },

  beforeDestroy() {
    if (this.player) {
      this.player.dispose();
    }
  },

  methods: {
    // 使用配置对象config初始化播放器
    // PS：播放器重复初始化时，不会更新配置
    $_video_init() {
      let config = {
        autoplay: this.autoplay,
        // 没必要传宽高，因下面样式已写宽高为100%
        // width: this.width,
        height: this.height,
        loop: this.loop,
        controls: this.controls,
        muted: this.muted,
        sources: [{ src: this.src, type: this.exactType }],
        // techOrder: ["html5", "flash"]
        techOrder: ["html5"],
        // techOrder: ["html5"]
      };

      if (this.coverAddr) {
        config.poster = this.coverAddr;
      }
      // console.log(config)
      // 根据页面上的video标签的id，将播放器挂载到上面
      this.player = videojs(this.$refs.videoPlayer, config);

      // 要触发的自定义事件
      var eventNames = [
        "loadstart", // 视频开始加载
        "canplay", // 视频可以播放
        "play", // 播放
        "pause", // 暂停
        "ended", // 视频播放结束
      ];

      for (const name of eventNames) {
        this.player.on(name, () => {
          this.$emit(name);
        });
      }
    },

    // 修改播放器属性，先重置再进行设置
    $_video_changeConfig() {
      // console.log(this.src)
      let config = { src: this.src, type: this.exactType };
      if (this.coverAddr) {
        config.poster = this.coverAddr;
      }
      this.player.src(config);
    },
  },
};
</script>

<style lang="scss" scoped>
/*
在video标签外围div包围盒（video.js默认会生成的）的宽高默认是（有两个）
.vjs_video_3-dimensions {
    width: 1920px;
    height: 1080px;
}
.video-js {
    width: 300px;
    height: 150px;
}
就是说，包围盒一定有px宽高，因此需要改为百分比宽高，从而达到自适应
 */
.videojs {
  height: 100%;
  width: 100%;
  background-color: transparent;
  .my-video {
    // 这里设置宽高，
    width: 100%;
    height: 100%;
    ::v-deep .vjs-poster {
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
    }
  }
}

/*不显示截图按扭*/
.my-video ::v-deep .vjs-camera-button {
  display: none;
}
</style>
