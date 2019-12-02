export default function (type) {

  function F1toFn(zzz) { // 生成 F1~Fn 参数为行*数据*的长度
    let children = [] // 往二级表头后面添加数据
      for (let i = 1; i <= zzz; i++) {  // F1~Fn
        children.push('F' + $i)
        $i++
    }
    return children
  }

  let rowLength = 7
  let country = [
    
  ]
  let head = [ // 土地利用面积比例统计
    [
      { val: '小计(km²)', col: '1', row: '2' },
      { val: '≤2°', col: '1', row: '1' },
      { val: '2~6°', col: '1', row: '1' },
      { val: '6~15°', col: '1', row: '1' },
      { val: '15~25°', col: '1', row: '1' },
      { val: '25~35°', col: '1', row: '1' },
      { val: '>35°', col: '1', row: '1' }
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
    let col = 1
    let color = 'leftHead2'

    if (item.x && item.x.length && item.x.length !==0) { // 二级
      row = item.x.length + 1
      body.push({ val, row, col, color })
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