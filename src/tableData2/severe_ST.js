export default function (type) {

  function judgeType(type) { // 改变表中不同的小标题
    switch (type) {
      case '18':
        return '各土地利用类型水蚀面积(km²)'
      case '19':
        return '各土地利用类型风蚀面积(km²)'
      default:
        return '各土地利用类型水土流失面积(km²)'
    }
  }

  function F1toFn(zzz) { // 生成 F1~Fn 参数为行*数据*的长度
    let children = [] // 往二级表头后面添加数据
      for (let i = 1; i <= zzz; i++) {  // F1~Fn
        children.push('F' + $i)
        $i++
    }
    return children
  }

  let rowLength = 8
  let country = [
    { s: '极强烈' },
    { s: '剧烈' },
    { s: '小计' }
  ]
  let head = [ // 土地利用面积比例统计
    [
      { val: '侵蚀强度', col: '1', row: '2' },
      { val: judgeType(type), col: rowLength, row: '1' }
    ],
    [
      { val: '耕地', col: '1', row: '1' },
      { val: '园地', col: '1', row: '1' },
      { val: '林地', col: '1', row: '1' },
      { val: '草地', col: '1', row: '1' },
      { val: '建设用地', col: '1', row: '1' },
      { val: '交通运输用地', col: '1', row: '1' },
      { val: '水域及水利设施用地', col: '1', row: '1' },
      { val: '其他用地', col: '1', row: '1' },
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