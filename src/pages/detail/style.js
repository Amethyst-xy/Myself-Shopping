import styled from 'styled-components';

export const DetailWrapper=styled.div`
    width:100%;
    height:calc(100vh - 30px);
    background:#f5f5f5;
    box-sizing:border-box;
    display:flex;
`;

export const ContentWrapper=styled.div`
    width:900px;
    height:520px;
    background:#fff;
    margin:auto;
    overflow:hidden;
    padding:30px;
    box-sizing:border-box;

    .left{
        width:55%;
        height:100%;
        float:left;

        >div{
            width:300px;
            height:300px;
            margin:10px auto;
            background:lightskyblue;
            display:none;

            &.show{
                display:block;
            }
            img{
                display:block;
                width:100%;
                height:100%;
            }
        }
        .smallImg{
            width:400px;
            height:130px;
            margin:0 auto;
            display:flex;

            .choose{
                background:#ddd;
                border:1px solid #f5f5f5;
                img{
                    border:none;
                }
            }

            li{
                flex:1;
                padding:5px;
                box-sizing:border-box;

                img{
                    border:1px solid #ddd;
                    background:#f5f5f5;
                    padding:3px;
                    box-sizing:border-box;
                    display:block;
                    width:100%;
                    height:100%;
                }
            }
        }
    }
    .right{
        width:45%;
        height:100%;
        float:right;
        padding:30px 30px 30px 10px;
        box-sizing:border-box;
        
        .writer{
            width:100%;
            height:80px;
            margin-bottom:10px;
            overflow:hidden;
            border-bottom:1px solid #eee;
            padding:10px;

            img{
                display:block;
                width:60px;
                height:60px;
                border-radius:50%;
                float:left;
                margin-right:10px;
            }
            .info{
                float:left;

                p{
                    font:700 16px/30px microsoft YaHei;
                    &:last-child{
                        font:normal 13px/30px microsoft YaHei;
                        color:#888;
                    }
                }
            }
        }
        .title{
            font:700 18px/30px microsoft YaHei;
            margin:20px 0;
        }
        .comment{
            text-indent:2em;
            font:normal 15px/30px microsoft YaHei;
        }
        .goods_link{
            display:block;
            width:100%;
            line-height:80px;
            font-size:18px;
            text-align:center;
            color:blueviolet;

            &:hover{
                text-decoration:underline;
            }
        }
    }
`;