export default function Sybc () {
  let head = [
    [
      { val: '名称', col: '2', row: '1' },
      { val: '生物措施', col: '4', row: '1' },
      { val: '工程措施', col: '15', row: '1' }
    ],
    [
      { val: '省名', col: '1', row: '2' },
      { val: '县名', col: '1', row: '2' },
      { val: '造林(km²)', col: '1', row: '1' },
      { val: '种草(km²)', col: '1', row: '1' },
      { val: '封育(km²)', col: '1', row: '1' },
      { val: '生态恢复(km²)', col: '1', row: '1' },
      { val: '梯田(km²)', col: '1', row: '1' },
      { val: '地埂(km²)', col: '1', row: '1' },
      { val: '水平(反坡梯田)(km²)', col: '1', row: '1' },
      { val: '水平沟(km²)', col: '1', row: '1' },
      { val: '竹节沟(km²)', col: '1', row: '1' },
      { val: '鱼鳞沟(km²)', col: '1', row: '1' },
      { val: '大型果树坑(km²)', col: '1', row: '1' },
      { val: '引洪漫地(km²)', col: '1', row: '1' },
      { val: '引水拉沙造地(km²)', col: '1', row: '1' },
      { val: '沙障固沙(km²)', col: '1', row: '1' },
      { val: '坡面小型排蓄工程(km²)', col: '1', row: '1' },
      { val: '工程护路(km²)', col: '1', row: '1' },
      { val: '沟头防护(km²)', col: '1', row: '1' },
      { val: '谷坊(km²)', col: '1', row: '1' },
      { val: '淤池坝(km²)', col: '1', row: '1' }
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
  let rowLength = head[1].length - 2
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