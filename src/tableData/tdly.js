export default function Tdly () {
  let head = [
    [
      { val: '名称', col: '2', row: '1' },
      { val: '土地总面积(km²)', col: '1', row: '3' },
      { val: '耕地', col: '3', row: '1' },
      { val: '园地', col: '3', row: '1' },
      { val: '林地', col: '3', row: '1' },
      { val: '草地', col: '3', row: '1' },
      { val: '建设用地', col: '4', row: '1' },
      { val: '交通运输用地', col: '2', row: '1' },
      { val: '水域及水利设施用地', col: '3', row: '1' },
      { val: '其他用地', col: '4', row: '1' },
    ],
    [
      { val: '省名', col: '1', row: '2' },
      { val: '县名', col: '1', row: '2' },
      { val: '水田', col: '1', row: '1' },
      { val: '水浇地', col: '1', row: '1' },
      { val: '旱地', col: '1', row: '1' },
      { val: '果园', col: '1', row: '1' },
      { val: '茶园', col: '1', row: '1' },
      { val: '其它园地', col: '1', row: '1' },
      { val: '有林地', col: '1', row: '1' },
      { val: '灌木林地', col: '1', row: '1' },
      { val: '其他林地', col: '1', row: '1' },
      { val: '天然牧草地', col: '1', row: '1' },
      { val: '人工牧草地', col: '1', row: '1' },
      { val: '其他草地', col: '1', row: '1' },
      { val: '城镇建设用地', col: '1', row: '1' },
      { val: '农村建设用地', col: '1', row: '1' },
      { val: '采矿用地', col: '1', row: '1' },
      { val: '其它建设用地', col: '1', row: '1' },
      { val: '农村道路', col: '1', row: '1' },
      { val: '其他交通用地', col: '1', row: '1' },
      { val: '河湖库塘', col: '1', row: '1' },
      { val: '沼泽地', col: '1', row: '1' },
      { val: '冰川及永久积雪', col: '1', row: '1' },
      { val: '盐碱地', col: '1', row: '1' },
      { val: '沙地', col: '1', row: '1' },
      { val: '裸土地', col: '1', row: '1' },
      { val: '裸岩石砾地', col: '1', row: '1' },
    ],
    [
      { val: '11', col: '1', row: '1' },
      { val: '12', col: '1', row: '1' },
      { val: '13', col: '1', row: '1' },
      { val: '21', col: '1', row: '1' },
      { val: '22', col: '1', row: '1' },
      { val: '23', col: '1', row: '1' },
      { val: '31', col: '1', row: '1' },
      { val: '32', col: '1', row: '1' },
      { val: '33', col: '1', row: '1' },
      { val: '41', col: '1', row: '1' },
      { val: '42', col: '1', row: '1' },
      { val: '43', col: '1', row: '1' },
      { val: '51', col: '1', row: '1' },
      { val: '52', col: '1', row: '1' },
      { val: '53', col: '1', row: '1' },
      { val: '54', col: '1', row: '1' },
      { val: '61', col: '1', row: '1' },
      { val: '62', col: '1', row: '1' },
      { val: '71', col: '1', row: '1' },
      { val: '72', col: '1', row: '1' },
      { val: '73', col: '1', row: '1' },
      { val: '81', col: '1', row: '1' },
      { val: '82', col: '1', row: '1' },
      { val: '83', col: '1', row: '1' },
      { val: '84', col: '1', row: '1' },
    ]
  ]
  let body = []
  let country = [
    {
      s: '湖北省',
      x: ['武汉', '孝感', '襄阳', '仙桃']
    },
    {
      s: '湖南省',
      x: ['长沙', '株洲', '湘潭', '衡阳', '岳阳']
    },
    {
      s: '四川省',
      x: ['重庆']
    },
    {
      s: '湖北省',
      x: ['武汉', '孝感', '襄阳', '仙桃']
    },
    {
      s: '湖南省',
      x: ['长沙', '株洲', '湘潭', '衡阳', '岳阳']
    },
    {
      s: '四川省',
      x: ['重庆']
    },
    {
      s: '湖北省',
      x: ['武汉', '孝感', '襄阳', '仙桃']
    },
    {
      s: '湖南省',
      x: ['长沙', '株洲', '湘潭', '衡阳', '岳阳']
    },
    {
      s: '四川省',
      x: ['重庆']
    }
  ]

  let $i = 1
  let rowLength = 26
  country.forEach(item => {
    let val = item.s
    let row = 2
    row = item.x.length + 1
    let col = 1
    body.push({ val, row, col })
    

    if (item.x && item.x.length && item.x.length !==0) { // 二级
      item.x.forEach(item => {
        let row = 1
        let col = 1
        let val = item

        let children = [] // 往二级表头后面添加数据
        for (let i = 1; i <= rowLength; i++) {  // F1~Fn
          children.push('F' + $i)
          $i++
        }
        body.push({ val, row, col, children })
      })
    }
    
  })
  return { head, body }
}