import Vue, { CreateElement } from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import { theme } from '../../config'

@Component
export class Item6 extends Vue {
        public render(h: CreateElement) {
                return (
                        <div class="Item6 container-fluid mpclear">
                                <div class="InContent">

                                        <div class="title">
                                                <h1>NO.6家政服务</h1>
                                        </div>
                                        <div class="content">
                                                <p>
                                                        <strong>1、建立良好的人际关系</strong>
                                                </p>
                                                <p>
                                                        <span>家政服务人员服务的过程首先是与雇主相处的过程，因此家政服务人员入户后，必须要和雇主建立起良好的人际关系，只有雇佣双方建立起和谐的人际关系，家政服务员在服务的过程中才能心情愉快，工作顺利。否则，双方的合作将无法继续，家政服务员就会失去这份工作。要搞好与雇主的人际关系应注意以下几点：</span>
                                                </p>
                                                <p>
                                                        <span>（1）做好本职工作是建立良好人际关系的前提，光说不练只会说嘴的家政服务人员根本不可能与雇主家庭建立起良好的和谐关系，家政服务人员应掌握家政服务的基本技能，能够达到雇主的服务要求。</span>
                                                </p>
                                                <p>
                                                        <span>（2）尊重雇主，要尊重雇主家庭中的每一位成员，家政服务人员对待雇主家庭的每一位家庭成员都应一视同仁，不要薄此厚彼。特别是在雇主家庭成员较多服务环境中，家政服务人员不要随着雇主家庭主要成员的眼光，做看人下菜碟的事情。</span>
                                                </p>
                                                <p>
                                                        <span>（3）不参与雇主家庭事务，雇主家庭成员之间如果产生一些矛盾，遇到这种情况，首先，家政服务人员不要介入雇主家庭成员的是非之中，不要充当调节人，应当置身事外，最好的办法是回避。事后，如果雇主家庭成员向家政服务人员提及此事，家政服务员也不应当对任何一方表示同情和理解，可说一些有利雇主双方有利于家庭和睦的话。</span>
                                                </p>
                                                <p>
                                                        <span>
                                                                <strong>2、要勤俭节约</strong>
                                                        </span>
                                                </p>
                                                <p>
                                                        <span>节约是一种美德，在城市生活中要特别注意对水、电的节约。国家正在处在发展阶段，能源十分紧张，特别是水的资源短缺情况，已经严重的影响到人民群众的生活。有许多家政服务员，由于长期的生活习惯不太注意节约用水、用电，如果雇主是老年人，他们特别注重节约，因此，家政服务人员应做到随手关灯，节约用水，在保证卫生的情况下要做到一水多用；在制作家庭餐的时候要把握家庭人口数量，以免发生浪费。</span>
                                                </p>
                                                <p>
                                                        <span>
                                                                <strong>3、学会控制自己的情绪</strong>
                                                        </span>
                                                </p>
                                                <p>
                                                        <span>家政服务人员在服务期间要学会控制自己的情绪变化，不要将自己的喜怒哀乐挂在脸上，这是家政服务人员特殊的服务环境所要求。家政服务人员难免在工作和生活中遇到烦心的事，如果对自己的情绪不能得到理智控制，势必会表现出来，不良情绪的流露不仅有可能造成雇主对你误解，也可能会给你的服务工作带来不良后果。因此，家政服务人员必须学会控制和调节自己的情绪。首先，要心胸开朗大度，不要小肚鸡肠；其次，遇事尽量三思而后行，避免产生不良情绪；再次，当情绪受到强烈刺激时，要有意识地用理智加以自我调节，努力克制它；最后，还必须努力学习文化知识，培养自己的道德修养，不断提高自身素质。</span>
                                                </p>
                                                <p>
                                                        <span>
                                                                <strong>4、学会对待工作中的挫折</strong>
                                                        </span>
                                                </p>
                                                <p>
                                                        <span>在现实生活中，面对遭受的挫折，不能一味地责怪自己，沉迷于痛苦之中，要多对家人和自己信赖的朋友倾诉，以得到他们的帮助。同时，松弛一下绷紧的神经，多参加自己喜欢的活动，分散注意力。此外，还要以积极主动的心理去承认它，面对它，并在朋友和家人帮助下分析挫折，找出导致挫折的关键所在，使你处于理智、冷静的状态之中。这样你不仅能正确面对它，而且也能顺利地摆脱困难。</span>
                                                </p>
                                                <p>
                                                        <span>
                                                                <strong>5、学会消除紧张心理</strong>
                                                        </span>
                                                </p>
                                                <p>
                                                        <span>当绝大多数家政服务人员初次迈进雇主家门时，都不可避免的会产生心理紧张，这是十分正常的情况。适度的紧张能提高工作效率，而且还能帮助我们适应瞬息万变的社会环境。但是，如果过度紧张，则可能会在工作中手忙脚乱，忙中有错，甚至不能适应服务环境，从而影响到正常的服务工作的开展。作为家政服务人员首次进入一个陌生的家庭，而产生一些紧张甚至有恐惧感是难免的，其实是一种极为正常的心理反应。关键是对家政服务员的职业要正确的认知，进入家庭是家政服务的职业特点，其实，与雇主之间的合作，是雇佣双方各取所需，服务人员需要一份工作，需要一份工资，雇主需要有人来承当家庭中一份不可缺少的服务工作，是各自的需求使双方走到一起。而在最初的接触中双方都会产生紧张，只是表现形式不同。关键在于雇佣双方能否进行良好沟通。</span>
                                                </p>
                                                <p>
                                                        <span>
                                                                <strong>6、经常与家庭保持联系</strong>
                                                        </span>
                                                </p>
                                                <p>
                                                        <span>常言道“儿行千里母担忧”，“家书抵万金”，这两句话反映出中国人对待亲情传统观念。外出务工人员，一旦在外地安定下来，应立即与家人取得联系，向家人报平安。在服务期间也应经常给家人打个电话或写封信，向家人讲述一下自己工作生活的情况，以免家乡亲人挂念。</span>
                                                </p>
                                                <p>
                                                        <span>
                                                                <strong>7、学会办理存款、汇款</strong>
                                                        </span>
                                                </p>
                                                <p>
                                                        <span>许多家政服务人员为了方便，喜欢将大量现金带在身上，这是一种极为不好的习惯。随身携带大量的现金，这种做法既不方便又易将钱丢失，在某些情况下还容易与雇主产生误会。家政服务人员要学会办理存款和汇款的手续。现在到银行或邮局办理存款手续十分简便，凭借本人身份证即可开户，为了保险起见还可以设立密码。要注意存折要妥善保管，密码不要告诉他人，也不要忘记。汇款，可到任何一家邮局办理，汇款时要写清收款人的姓名、详细地址。要保存好汇款单据，以被查询。注意存款、汇款都要填写真实姓名。</span>
                                                </p>
                                                <p>
                                                        <span>
                                                                <strong>8、生病与就医</strong>
                                                        </span>
                                                </p>
                                                <p>
                                                        <span>家政服务人员在服务期间，应特别注意身体健康，健康的身体是从事家政服务工作的基本条件。不要暴饮暴食，少吃生冷食物，要依据天气变化增减衣物，减少生病的机会。在服务期间发现身体不适可先向雇主咨询，如果是一般伤风感冒，可以依据情况吃家庭常备药品。当然，许多家政服务人员为了省钱常常自己去药房买药吃，这种做法不值得提倡。最好的方法应该是到附近的医院挂号看病，请医生作出病情诊断后，再按照医生要求买药服药。家政服务人员在服务期间，遇到经期自己可以适当调整工作内容，如果情况严重，可告诉女雇主请她给予适当的照顾。&nbsp;</span>
                                                </p>

                                        </div>

                                </div>
                        </div>
                )
        }
}
