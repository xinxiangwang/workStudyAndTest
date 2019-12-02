export default function Zbfg () {
  let head = [
    [
      { val: '名称', col: '2', row: '1' },
      { val: '面积(km²)', col: '5', row: '1' },
      { val: '比例(%)', col: '5', row: '1' }
    ],
    [
      { val: '省名', col: '1', row: '2' },
      { val: '县名', col: '1', row: '2' },
      { val: '高覆盖度', col: '1', row: '1' },
      { val: '中高覆盖度', col: '1', row: '1' },
      { val: '中覆盖度', col: '1', row: '1' },
      { val: '中低覆盖度', col: '1', row: '1' },
      { val: '低覆盖度', col: '1', row: '1' },
      { val: '高覆盖度', col: '1', row: '1' },
      { val: '中高覆盖度', col: '1', row: '1' },
      { val: '中覆盖度', col: '1', row: '1' },
      { val: '中低覆盖度', col: '1', row: '1' },
      { val: '低覆盖度', col: '1', row: '1' },
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
  let rowLength = 10
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