import Vue, { CreateElement } from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import { theme } from '../config'
import { api } from '../utils'


@Component
export default class IntoWorld extends Vue {
        public imgSrc: string = "http://i2.tiimg.com/611341/e15245016e259173.jpg"

        public article: any = {
                "title": "四海日盛保洁",
                "articleType": "公司介绍",
                "authors": "四海日盛",
                "thumb": "http://i2.tiimg.com/611341/e15245016e259173.jpg",
                "keywords": "保洁 简介",
                "content": "        四海日盛保洁隶属于北京四海日盛人力资源管理有限公司座落于北京朝阳区高碑店，总投资9000万、注册资本800万,在2006年初公司为了扩大经营范围，主要接受委托提供工程劳务人员输送以及清洁服务一体化综合性服务公司，业务涉及成品保护、保洁、电梯运行、外墙清洗、石材翻新，工程开荒等行业。经过努力与探索，经营与发展，完善与提高，在所提供的服务领域内，享有较高的公司信誉，得到广泛的认同和赞许，公司在实践中摸索和总结经验，积累了一套完整的行之有效的专业管理工作经验，通过不间断的、周到的、细致的、系统性的管理，确定的一专多能、多元化、多功能的发展方向和经营目标，建立建全公司管理制度，逐渐发展成为一家专业化、纪律化、职业化、正规化的管理公司，建设一支高素质、高效益、高规格、高度责任心的员工及队伍。\n\n        公司用真诚树立良好的企业形象，以高度责任感和事业心，塑造公司信誉。周到、热情、细致的服务，得到方方面面的赞誉和肯定。我们坚信，用我们良好的素质，严格的管理，高度的责任感和事业心，一定能够保证城市建筑精品的完美无瑕。公司全体员工愿与业界同仁精诚合作，共谋发展，再铸辉煌。"
        }

        public render(h: CreateElement) {
                return (
                        <div class="IntoWorld container-fluid mpclear itemTitle">
                                <div class='title'>
                                        <dl class='fl'>
                                                <dt>走进四海</dt>
                                                <dd>Into the world</dd>
                                        </dl>
                                </div>
                                <div class="incontent">
                                        <div class="InContent">
                                                <p><img src={this.article.thumb} alt={this.article.title} /></p>
                                                <p><h3><strong>{this.article.title}</strong></h3></p>
                                                <pre class="mainBody">{this.article.content}</pre>
                                        </div>
                                </div>
                        </div>
                )
        }
        public created() {
                api('/api/article/detArticle', {
                        "articleID": "20180710437823"
                }, callback => {
                        this.article = callback.data
                })
                this.innerHtml()
        }
        public innerHtml() {
                let mainBody = document.getElementsByClassName('mainBody')[0]
                let handleText = this.article.content.split('<body>')
                if (handleText.length > 1) {
                        mainBody.innerHTML = handleText[1].split('</body>')[0]
                }
                console.log(handleText, handleText.length, 111, handleText[0]);
        }
}
