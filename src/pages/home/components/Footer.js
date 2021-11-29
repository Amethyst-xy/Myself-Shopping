import React,{Component} from 'react';
import './footerStyle.less';

class Footer extends Component{
    render(){
        return (
            <div className='footerw'>
                <div className='footerbox'>
                    <h2>MYSELF</h2>
                    <table className='footertable'>
                       <tbody>
                        <tr>
                                <th>使用指南</th>
                                <th>支付方式</th>
                                <th>友情链接</th>
                                <th>售后服务</th>
                            </tr>
                            <tr>
                                <td>操作流程</td>
                                <td>立即支付</td>
                                <td>淘宝</td>
                                <td>售后政策</td>
                            </tr>
                            <tr>
                                <td>会员介绍</td>
                                <td>定时支付</td>
                                <td>天猫商城</td>
                                <td>价格保护</td>
                            </tr>
                            <tr>
                                <td>常见问题</td>
                                <td>积分兑换</td>
                                <td>京东</td>
                            </tr>
                       </tbody>
                    </table>
                </div>
                <div className='footerbottom'>
                    <p>Myself网站旨在为电商平台的服装消费者有偿提供“等比例”（身高、体重、三维等）买家秀服务，满足消费者个性化、差异化的消费需求。目前国内</p>
                    <p>电商平台在服装销售的“买家秀”环节存在零散化、片面化、欺骗性的特点，服装消费者为了最大程度地降低“试错成本”，会产生寻找“等比例模特”的想法，</p>
                    <p>而同一产品的广大消费者即为该产品的“等比例模特”。服装产品消费者购买产品后，即可在该网站发布自己的身高、体重、三维等信息以及上传效果图（隐私保护），供需求方使用。</p>
                </div>
            </div>
        );
    }
}

export default Footer;