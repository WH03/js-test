const Stream = require('node-rtsp-stream');

// Name of the stream, used to identify it in the API
new Stream({
	name: 'socket',
	streamUrl: 'rtsp://192.168.2.45:8554/demo1',
	wsPort: 3333,
	// ffmpeg 的一些配置参数，比如转换分辨率等，大家可以去 ffmpeg 官网自行查询
	ffmpegOptions: {
		'-stats': '',
		'-r': 20,
		'-s': '1280 720'
	}
});