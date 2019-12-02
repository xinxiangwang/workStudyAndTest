export default function (type) {

  function F1toFn(zzz) { // 生成 F1~Fn 参数为行*数据*的长度
    let children = [] // 往二级表头后面添加数据
      for (let i = 1; i <= zzz; i++) {  // F1~Fn
        children.push('F' + $i)
        $i++
    }
    return children
  }

  let rowLength = 26
  let country = [{
    s:'耕地',
    x: ['水田', '水浇地', '旱地']
  }, {
    s:'园地',
    x: ['果园', '茶园', '其他园地']
  },
  {
    s:'林地',
    x: ['有林地', '灌木林地', '其他林地']
  },
  {
    s:'草地',
    x: ['人工牧草地', '天然牧草地', '其他草地']
  },
  {
    s:'建设用地',
    x: ['城镇建设用地', '农村建设用地', '采矿用地', '其他建设用地']
  },
  {
    s:'交通运输用地',
    x: ['农村道路', '其他交通用地']
  },
  {
    s:'水域及水利设施用地',
    x: ['河湖库塘', '沼泽地', '冰川及永久积雪']
  },
  {
    s:'其他',
    x: ['盐碱地', '沙地', '裸土地', '裸岩石砾地']
  },
  {
    s:'合计'
  }
  ]
  let head = [ // 土地利用面积比例统计
    [
      { val: 'time', col: '3', row: '3' },
      { val: '耕地', col: '3', row: '1' },
      { val: '园地', col: '3', row: '1' },
      { val: '林地', col: '3', row: '1' },
      { val: '草地', col: '3', row: '1' },
      { val: '建设用地', col: '4', row: '1' },
      { val: '交通运输用地', col: '2', row: '1' },
      { val: '水域及水利设施用地', col: '3', row: '1' },
      { val: '其他', col: '4', row: '1' },
      { val: '总计', col: '1', row: '1' }
    ],
    [
      { val: '水田', col: '1', row:1},
      { val: '水浇地', col: '1',  row: 1 },
      { val: '旱地', col: '1',  row: 1 },
      { val: '果园', col: '1',  row: 1 },
      { val: '茶园', col: '1',  row: 1 },
      { val: '其它园地', col: '1', row: 1 },
      { val: '有林地', col: '1',  row: 1 },
      { val: '灌木林地', col: '1', row: 1 },
      { val: '其它林地', col: '1', row: 1 },
      { val: '天然牧草地', col: '1', row: 1 },
      { val: '人工牧草地', col: '1', row: 1 },
      { val: '其它草地', col: '1', row: 1 },
      { val: '城镇建设用地', col: '1', row: 1 },
      { val: '农村建设用地', col: '1', row: 1 },
      { val: '采矿用地', col: '1', row: 1 },
      { val: '其他建设用地', col: '1', row: 1 },
      { val: '农村道路', col: '1', row: 1 },
      { val: '其他交通用地', col: '1', row: 1 },
      { val: '灌河湖库塘', col: '1', row: 1 },
      { val: '沼泽地', col: '1', row: 1 },
      { val: '冰川及永久积雪', col: '1', row: 1 },
      { val: '盐碱地', col: '1', row: 1 },
      { val: '沙地', col: '1', row: 1 },
      { val: '裸土地', col: '1', row: 1 },
      { val: '裸岩石砾地', col: '1', row: 1 }
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
        body.push({ val, row, col: 3, color, children })
      } else {
        body.push({ val, row, col: 3, children })
      }
        colorChange++
    }
    
  })
  return { head, body }
}