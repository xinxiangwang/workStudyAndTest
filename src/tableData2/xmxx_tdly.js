export default function (type) {

  function judgeType(type) { // 改变表中不同的小标题
    switch (type) {
      case '13':
      case '16':
        return '水蚀面积(km²)'
      case '14':
      case '17':
        return '风蚀面积(km²)'
      default:
        return '水土流失面积(km²)'
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

  let country = [
    {
      s: '耕地', x: ['水田', '水浇地', '旱地', '小计']
    },
    {
      s: '园地', x: ['果园', '茶园', '其它园地', '小计']
    },
    {
      s: '林地', x: ['有林地', '灌木林地', '其他林地', '小计']
    },
    {
      s: '草地', x: ['人工牧草地', '天然牧草地', '其他草地', '小计']
    },
    {
      s:'建设用地', x: ['城镇建设用地', '农村建设用地', '采矿用地', '其他建设用地', '小计']
    },
    {
      s:'交通运输用地', x: ['农村道路', '其他交通用地', '小计']
    },
    {
      s:'水域及水利设施用地', x: ['河湖库塘', '沼泽地', '冰川及永久积雪', '小计']
    },
    {
      s:'其他', x: ['盐碱地', '沙地', '裸土地', '裸岩石砾地', '小计']
    },
    {
      s:'合计'
    }
  ]

  let head = [ // 土地利用面积比例统计
    [
      { val: '土地利用一级类', col: '1', row: '1' },
      { val: '土地利用二级类', col: '1', row: '1' },
      { val: '面积(km²)', col: '1', row: '1' },
      { val: '占总面积比(%)', col: '1', row: '1' },
    ],
  ]

  let rowLength = 2 // 土地利用面积比例统计 行数据个数

  let HeJi = 2 // 二级类表和一级类表 合计col是不一样的

  if (['12', '13', '14'].indexOf(type) > -1) { // 二级类土地利用统计表
    rowLength = 7
    head = [
      [
        { val: '土地利用一级类', col: '1', row: '2' },
        { val: '土地利用二级类', col: '1', row: '2' },
        { val: '土地面积(km²)', col: '1', row: '2' },
        { val: judgeType(type), col: '6', row: '1' },
      ],
      [
        { val: '小计', col: '1', row: '1' },
        { val: '轻度', col: '1', row: '1' },
        { val: '中度', col: '1', row: '1' },
        { val: '强烈', col: '1', row: '1' },
        { val: '极强烈', col: '1', row: '1' },
        { val: '剧烈', col: '1', row: '1' },
      ]
    ]

  } else if (['15', '16', '17'].indexOf(type) > -1) { // 一级类土地利用统计表
    rowLength = 7
    HeJi = 1
    head = [
      [
        { val: '土地利用一级类', col: '1', row: '2' },
        { val: '土地面积(km²)', col: '1', row: '2' },
        { val: judgeType(type), col: '6', row: '1' },
      ],
      [
        { val: '小计', col: '1', row: '1' },
        { val: '轻度', col: '1', row: '1' },
        { val: '中度', col: '1', row: '1' },
        { val: '强烈', col: '1', row: '1' },
        { val: '极强烈', col: '1', row: '1' },
        { val: '剧烈', col: '1', row: '1' },
      ],
    ]
    country = [
      { s: '耕地' },
      { s: '园地' },
      { s: '林地' },
      { s: '草地' },
      { s:'建设用地' },
      { s:'交通运输用地' },
      { s:'水域及水利设施用地' },
      { s:'其他' },
      { s:'合计' }
    ]
  }
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
        body.push({ val, row, col: HeJi, color, children })
      } else {
        body.push({ val, row, col: HeJi, children })
      }
        colorChange++
    }
    
  })
  return { head, body }
}