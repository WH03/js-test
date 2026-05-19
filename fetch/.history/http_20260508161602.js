async function http(obj) {
  let { url, method, params, data } = obj;
  // 处理params参数，将其转换成查询字符串的形式：key：value，拼接到url后面
  if (params) {
    let str = new URLSearchParams(params).toString();
    url += `?${str}`;
  }
  // console.log('url:', url)

  let res; // 定义一个变量来存储fetch的结果
  // 处理data参数，将其转换成json字符串的形式，放在fetch的body中
  if (data) {
    res = await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json", // 设置请求头
      },
      body: JSON.stringify(data), // 将data对象转换成json字符串
    });
  } else {
    res = await fetch(url);
  }
  return res.json(); // 将fetch的结果转换成json数据并返回
}
