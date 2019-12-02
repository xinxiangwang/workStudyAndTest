export default function (type) {

  function F1toFn(zzz) { // 生成 F1~Fn 参数为行*数据*的长度
    let children = [] // 往二级表头后面添加数据
      for (let i = 1; i <= zzz; i++) {  // F1~Fn
        children.push('F' + $i)
        $i++
    }
    return children
  }

  let rowLength = 4
  let country = [
    {
      s: '微度侵蚀',
      x: ['面积', '%'],
    },
    {
      s: '水土流失面积比例',
      x: ['面积', '%'],
    },
    {
      s: '各级土壤侵蚀强度面积及比例',
      x: ['轻度', '中度', '强烈', '极强烈', '剧烈'],
      w: ['面积', '占水土流失总面积比例(%)']
    }
  ]
  let head = [ // 土地利用面积比例统计
    [
      { val: '不同侵蚀强度', col: '2', row: '1' },
      { val: '面积及比例', col: '1', row: '1' },
      { val: '水力侵蚀', col: '1', row: '1' },
      { val: '水力侵蚀', col: '1', row: '1' },
      { val: '冻融侵蚀', col: '1', row: '1' },
      { val: '合计°', col: '1', row: '1' }
    ]
  ]
  let body = []

  /**
   * $i 记录循环次数 循环换行时生成连续的 F1 ~FN
   * rowLength 每行放数据的个数
   * colorChange 记录存放数据的行是奇数还是偶数
   * color 样式名 用来改变颜色
   */
  let $i = 1
  let colorChange = 0
  if (country.length == '0') {
    let children = F1toFn(rowLength)
    body.push({children})
    return { head, body }
  }
  country.forEach(item => {
    let val = item.s
    let row = 1
    let color = 'leftHead2'

    if (item.x && item.x.length && item.x.length !==0 && !(item.w && item.w.length && item.w.length !==0) ) { // 二级
      row = item.x.length + 1
      body.push({ val, row, col: 2, color })
      item.x.forEach(item => {
        let row = 1
        let col = 1
        let val = item
        let color = 'odd'
        let children = F1toFn(rowLength)
        if (colorChange%2 == 0) {
          body.push({ val, row, col, color, children })
        } else {
          body.push({ val, row, col, children })
        }
          colorChange++
      })

    } else if (item.w && item.w.length && item.w.length !==0) { // 三级
      console.log('aaa')
      row = item.x.length * item.w.length + 10
      body.push({ val, row, col: 1, color })

      item.x.forEach(Xitem => {
        body.push({ val: Xitem, row: item.w.length + 1, col: 1, color })
        let children = F1toFn(rowLength)
        item.w.forEach(Witem => {
          if (colorChange%2 == 0) {
            body.push({ val: Witem, row: 1, col: 1, color: 'odd', children})
          } else {
            body.push({ val: Witem, row: 1, col: 1, children})
          }
            colorChange++
          
        })
      })
    } else { // 只有一级标题
      let color = 'odd'
      let children = F1toFn(rowLength)
      if (colorChange%2 == 0) {
        body.push({ val, row, col: 1, color, children })
      } else {
        body.push({ val, row, col: 1, children })
      }
        colorChange++
    }
    
  })
  return { head, body }
}