let set_config = {
    // 头部导航
    header:[
        {link:"/",txt:"首页"},
        {link:"/app/works",txt:"案例展示",child:[{link:"/app/works?id=1",txt:"创意短视频"},{link:"/app/works?id=2",txt:"企业广告"},{link:"/app/works?id=3",txt:"影视广告"}]},
        {link:"/app/news",txt:"新闻动态"},
        {link:"/app/about",txt:"关于SINQ"},
        {link:"/app/client",txt:"我们的客户"},
        {link:"/app/joinwe",txt:"加入我们"},
        {link:"/app/contactwe",txt:"联系我们"}
    ],
    work_type:[{
        text:"创意短视频",
        value:1,
    },{
        text:"企业产品",
        value:2,
    },{
        text:"影视广告",
        value:3,
    },{
        text:"灯光秀",
        value:4,
    }],
    news_type:[{
        text:"类型1",
        value:1,
    },{
        text:"类型2",
        value:2,
    },{
        text:"类型3",
        value:3,
    },{
        text:"类型4",
        value:4,
    }],
}