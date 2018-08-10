import Vue, { CreateElement } from 'vue'
import { Component, Prop } from 'vue-property-decorator'


@Component
export class NewsDetail extends Vue {

        public newsData: any = {
                news1: {
                        title: "军区总医院",
                        main: "<p><span>&nbsp; &nbsp; 北京军区总医院坐落在北京市中心，占地面积 23.2 万平方米的北京军区总医院分东、西两院。东院位于北京市东三环麦子店，西院位于北京市东四繁华商业区。北京军区总医院是一所历史悠久、设备精良、技术先进，集预防、保健、医疗、科研、教学、康复为一体的大型综合性三级甲等医院。我司承接成品保护、开荒保洁、日常保洁等。得到客户好评。</span></p> "
                },
                news2: {
                        title: "国家会议中心",
                        main: "<p><span>&nbsp; &nbsp; 国家会议中心外形美观大方,总建筑面积53万平方米,会议中心主体建筑面积27万平方米,功能齐全,设施先进,将是中国最大、最新的会议中心。最大的会议厅可容纳6,000人</span></p>"
                },
                news3: {
                        title: "公安部家属楼",
                        main: "<p><span>&nbsp; &nbsp; 2009年我司承接成品保护工作，人保160名进行24小时现场看护。合作单位：中国建筑第八工程局有限公司。</span></p>"
                },
                news4: {
                        title: "海军司令办公大楼",
                        main: "<p><span>&nbsp; &nbsp; 部位于西长安街公主坟地段我司承接海军司令办公大楼</span></p>"
                },
                news5: {
                        title: "北京铁道部党校",
                        main: "<p><span>&nbsp; &nbsp; 铁道部党校占地总面积3.9万平方米,建筑面积4.8万平方米。铁道部党校始建于1955年,原为铁道部干部学校,1961年改为铁道部党委党校,1969年年底撤销,1975年复校重建。1995年与北京铁道管理干部学院合并,成为集党校和干校功能于一体的培训轮训铁路较高层次领导干部的基地。</span></p>"
                },
                news6: {
                        title: "公司简介",
                        main: "<p style='text-align: right;'><span>北京四海日盛建材有限公司及物业管理分公司&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></p><p><span>&nbsp; &nbsp; 北京四海日盛建材有限公司、物业管理分公司座落于北京朝阳区高碑店，总投资9000万、注册资本800万，2001年始创以来主要经营建筑材料的研发、生产及销售，公司的理念极为简单：即生产混凝土工程中最好的外加剂，并为客户提供优质服务。</span></p><p><span>&nbsp; &nbsp; 在2006年初公司为了扩大经营范围在其下成立了物业管理分公司，主要接受委托提供工程劳务人员输送以及清洁服务一体化综合性服务公司，业务涉及成品保护、保安、保洁、电梯运行、外墙清洗、石材翻新，工程开荒等行业。经过努力与探索，经营与发展，完善与提高，在所提供的服务领域内，享有较高的公司信誉，得到广泛的认同和赞许，公司在实践中摸索和总结经验，积累了一套完整的行之有效的专业管理工作经验，通过不间断的、周到的、细致的、系统性的管理，确定的一专多能、多元化、多功能的发展方向和经营目标，建立建全公司管理制度，逐渐发展成为一家专业化、纪律化、职业化、正规化的管理公司，建设一支高素质、高效益、高规格、高度责任心的员工及队伍。公司用真诚树立良好的企业形象，以高度责任感和事业心，塑造公司信誉。周到、热情、细致的服务，得到方方面面的赞誉和肯定。我们坚信，用我们良好的素质，严格的管理，高度的责任感</span><span>事业心，一定能够保证城市建筑精品的完美无瑕。公司全体员工愿与业界同仁精诚合作，共谋发展，再铸辉煌。 &nbsp;</span></p>"
                },
        }
        public news: any

        public render(h: CreateElement) {
                return (
                        <div>
                                <div class="InContent">
                                        <h1>{this.news.title}</h1>
                                        <div id='main' class="content"></div>
                                </div>
                        </div>
                )
        }

        public beforeMount() {
                this.getArticle()
        }
        public mounted() {
                this.article()
        }

        public getArticle() {
                let curPath = (this.$router as any).history.current.path
                let articleId = curPath.split('/itemCard/news/')[1]
                this.news = this.newsData[articleId]
        }

        public article() {
                let main: any = document.getElementById('main')
                main.innerHTML = this.news.main
        }
}
