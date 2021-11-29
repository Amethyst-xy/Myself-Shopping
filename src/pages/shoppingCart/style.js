import styled from 'styled-components';

export const SearchWrapper=styled.div`
    width:100%;
    height:100px;
    background:linear-gradient(to bottom,#f5f5f5,#fff);
`;

export const LogoCart=styled.div`
    padding:0 100px;
    height:100px;
    box-sizing: border-box;
    display: block;
    float: left;
    line-height:100px;
    color: lightskyblue;
    text-shadow: 1px 1px 1px #000;
    font-size:30px;

    span{
        text-align: center;
        width: 220px;
        height: 60px;
        font: 900 60px/60px 华文行楷;
        margin-top: 20px;
        margin-right:10px;
    }
`;

export const SearchBox=styled.div`
width:560px;
height:100%;
float:right;
margin-right:100px;
position:relative;

.search_input{
    width:480px;
    height:40px;
    margin:27px 10px 27px 0px;
    outline:none;
    border:none;
    border:1px solid lightskyblue;
    border-radius:4px;
    padding:0 35px;
    box-sizing:border-box;
}

.search_btn{
    display:inline-block;
    height:40px;
    padding:0 15px;
    text-align:center;
    box-sizing:border-box;
    border:none;
    background:linear-gradient(to right,lightskyblue,#4e6ef2);
    border-radius:4px;
    color:#fff;
    font:700 18px/40px simSun;
    margin-top:27px;

    &:hover{
        cursor:pointer;
    }
}

    i{
        font-size:25px;
        color:lightskyblue;
    }
    .zoom{
        position:absolute;
        left:6px;
        bottom:37px;
    }
    .photo{
        position:absolute;
        right:90px;
        bottom:37px;
    }
`;

export const ContentWrapper=styled.div`
    width:100%;
    height:100%;
    padding-bottom:50px;
    background:linear-gradient(to bottom,#fff,lightskyblue);
`;

export const WholeGoods=styled.div` 
    width:1060px;
    margin:20px auto 80px;
    
`;

export const GoodsHeader=styled.div`
    width:100%;
    border-bottom:2px solid blueviolet;
    overflow:hidden;

    .whole{
        padding:5px 20px;
        font-size:18px;
        font:700 18px/30px microsoft YaHei;
        float:left;

        span{
            color:blueviolet;
        }
    }
    .choose{
        padding:5px 20px;
        font:700 14px/30px simSun;
        float:right;

        span{
            font:700 13px/30px microsoft YaHei;
            color:blueviolet;

            &.pay{
                display:inline-block;
                color:#fff;
                height:25px;
                padding:0 15px;
                font:700 14px/25px simSun;
                box-sizing:border-box;
                background:blueviolet;
                border-radius:2px;
            }
        }
    }
`;

export const GoodsInfo=styled.div`
    width:100%;
    height:50px;

    li{
        list-style:none;
        font:normal 14px/50px simSun;
        padding:0 60px;
        box-sizing:border-box;

        &.left{
            float:left;
        }
        &.right{
            float:right;
        }

        &:hover{
            color:blueviolet;
            text-decoration:underline;
        }
    }
`;

export const GoodsItem=styled.div`
    width:100%;
    margin:0 auto;

    p{
        width:100%;
        height:30px;
        font:700 14px/30px simSun;
        padding-left:60px;
        box-sizing:border-box;
    }
`;

export const DetailInfo=styled.div`
    width:100%;
    height:190px;
    box-shadow:0px 0px 3px #fff;
    overflow:hidden;
    margin-bottom:20px;
    // background:linear-gradient(to bottom,lightskyblue,lightskyblue,#fff);
`;

export const DisCount=styled.div`
    width:100%;
    height:40px;
    background:#f5f5f5;
    border-bottom:1px solid #eee;
    position:relative;

    i{
        position:absolute;
        left:70px;
        bottom:-11px;
        font-size:30px;
        color:lightskyblue;
    }
    span{
        font:700 13px/40px simSun;
        color:#666;

        &.discount{
            display:inline-block;
            height:22px;
            padding:0 2px;
            border:2px solid blueviolet;
            border-radius:2px;
            font:700 13px/18px microsoft YaHei;
            margin:0 10px 0 60px;
            color:blueviolet;
        }
    }
`;

export const Info=styled.div`
    width:430px;
    height:100%;
    float:left;
    padding:15px;
    box-sizing:border-box;
    overflow:hidden;
    color:#999;

    input{
        float:left;
    }
    img{
        display:block;
        float:left;
        width:100px;
        height:100px;
        margin:10px;
    }
    .goods_info{
        padding:0 15px;
        height:100%;

        span{
            color:#555;
            &:hover{
                color:blueviolet;
                text-decoration:underline;
            }
        }
    }
    .carousel_small{
        width:110px;
        height:100%;
        float:left;
        margin-right:20px;
    }
`;

export const Stature=styled.div`
    width:215px;
    height:100%;
    float:left;
    padding:20px;
    box-sizing:border-box;
    color:#888;

    p{
        padding:0;
    }
`;

export const Price=styled.div`
    width:100px;
    height:100%;
    float:left;
    padding:20px 0;
    box-sizing:border-box;
    font:700 14px/30px simSun;

    li{
        list-style:none;
        text-align:center;
    }
    .pre{
        text-decoration:line-through;
        font:normal 14px/25px microsoft YaHei;
        color:#888;
    }
    .now{
        font:700 16px/25px microsoft YaHei;
        color:#000;
    }
    .add{
        height:30px;
        width:75px;
        padding:0 5px;
        background:#1dc2b4;
        color:#fff;
        border-radius:2px;
        margin:10px auto;
    }
`;

export const Money=styled.div`
    width:200px;
    height:100%;
    float:left;

    p{
        font:700 16px/148px microsoft YaHei;
        color:#e1251b;

        &.to_detail{
            text-decoration:underline;
            &:hover{
                color:blueviolet;
            }
        }
    }
`;

export const Operation=styled.div`
    width:113px;
    height:100%;
    float:left;
    padding:49px 0;
    box-sizing:border-box;

    li{
        list-style:none;
        font:700 13px/25px simSun;
        text-align:center;

        &:hover{
            cursor:pointer;
            color:blueviolet;
            text-decoration:underline;
        }
    }
`;

export const Footer=styled.div`
    position:fixed;
    left:0;
    bottom:0;
    width:100%;
    height:60px;
    background:#f5f5f5;
    padding:0 0;
    box-sizing:content-box;
    border-top:1px solid blueviolet;

    li{
        list-style:none;
        font:700 14px/60px simSun;
        padding:0 15px;
        color:#666;
        text-align:center;

        input{
            margin-right:5px;
        }
        span{
            font-size:20px;
            margin:0 5px;
            color:blueviolet;
            font-weight:900;
        }
        &.left{
            float:left;
            &:hover{
                color:blueviolet;
                text-decoration:underline;
            }
        }
        &.right{
            float:right;
        }
        &.banlance{
            width:100px;
            background:blueviolet;
            font-size:22px;
            font-family:microsoft YaHei;
            color:#fff;

            &:hover{
                cursor:pointer;
            }
        }
    }
`;

export const SettleAccounts=styled.div`
    position:fixed;
    top:0;
    bottom:0;
    left:0;
    right:0;
    background:rgba(0,0,0,0.2);
    z-index:100;
`;

export const AccountWrapper=styled.div`
    position:relative;
    top:50%;
    margin:-140px auto 140px;
    width:430px;
    height:280px;
    background:#fff;
    box-shadow:0 0 10px #fff;
    padding:20px;
    box-sizing:border-box;
    overflow:hidden;

    img{
        width:50%;
        height:100%;
        float:left;
    }
    .right{
        width:50%;
        height:100%;
        float:right;
        text-align:center;
        padding:30px 0px 30px 20px;
        box-sizing:border-box;

        .btn{
            margin:0 auto;
            button{
                background:blueviolet;
                border:none;
                outline:none;
                padding:5px 6px;
                margin:0 4px;
                color:#fff;
                border-radius:2px;
                font-size:13px;

                &:hover{
                    cursor:pointer;
                    box-shadow:0 0 2px blueviolet;
                }
            }
        }
        p{
            margin:0;
            font:normal 13px/40px microsoft YaHei; 
        }        
        .pay{
            font:700 20px/30px microsoft YaHei;
            span{
                font-family:simSun;
                color:red;
            }
        }
        .iconfont{
            font-size:36px;
            margin:0 3px;

            &.wx{
                color:green;
            }
            &.zfb{
                color:blue;
            }
        }
    }
`;