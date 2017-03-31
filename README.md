# react-ueditor

# ueditor
下载好的 ueditor 的包放在服务器就行了，或者使用 cdn， 在下面这个方法里面写好正确的路径, 然后修改 baseUrl, serverUrl。

```js
loadUE() {
  const url = `/ueditor/ueditor.all.js`;
  const configUrl = `/ueditor/ueditor.config.js`;
  const langUrl = `/ueditor/lang/zh-cn/zh-cn.js`;

  // 顺序很重要~
  createScript(configUrl, () => {
    createScript(url, () => {
      createScript(langUrl, ::this.initUE);
    });
  });
}
```

前面提到的修改都是必须的，config 当然随意咯~

## 秀米

> 不使用 秀米 就把 initXiuMi 方法，以及下面的引用及 props 中关于秀米的东西删掉

秀米这个不是主要功能，但是挺方便，可以看这个：[秀米编辑器 附着在 ueditor 上](http://hgs.xiumi.us/uedit/)
