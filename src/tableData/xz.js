export default function Xz () {
  let head = [
    [
      { val: '名称', col: '2', row: '1' },
      { val: '土地总面积(km²)', col: '1', row: '3' },
      { val: '水土流失(km²)', col: '3', row: '1' },
      { val: '轻度侵蚀(km²)', col: '3', row: '1' },
      { val: '中度侵蚀(km²)', col: '3', row: '1' },
      { val: '强度侵蚀(km²)', col: '3', row: '1' },
      { val: '极强烈侵蚀(km²)', col: '3', row: '1' },
      { val: '剧烈侵蚀(km²)', col: '3', row: '1' },
    ],
    [
      { val: '省名', col: '1', row: '2' },
      { val: '县名', col: '1', row: '2' },
      { val: '水利普查', col: '1', row: '1' },
      { val: '本年度', col: '1', row: '1' },
      { val: '消长情况', col: '1', row: '1' },
      { val: '水利普查', col: '1', row: '1' },
      { val: '本年度', col: '1', row: '1' },
      { val: '消长情况', col: '1', row: '1' },
      { val: '水利普查', col: '1', row: '1' },
      { val: '本年度', col: '1', row: '1' },
      { val: '消长情况', col: '1', row: '1' },
      { val: '水利普查', col: '1', row: '1' },
      { val: '本年度', col: '1', row: '1' },
      { val: '消长情况', col: '1', row: '1' },
      { val: '水利普查', col: '1', row: '1' },
      { val: '本年度', col: '1', row: '1' },
      { val: '消长情况', col: '1', row: '1' },
      { val: '水利普查', col: '1', row: '1' },
      { val: '本年度', col: '1', row: '1' },
      { val: '消长情况', col: '1', row: '1' },
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
  let rowLength = head[1].length - 1
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