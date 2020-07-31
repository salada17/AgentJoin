/// <reference path="../../../../sugarhill.officesquare.web/scripts/index.tsx" />
/// <reference path="../../components/index.tsx" />

interface IWebAgentJoinProductMainProps {
}

interface IWebAgentJoinProductMainState {
}

interface IWebAgentJoinProductMainContent {
    title: agentJoinProductName;
    content: string;
}

class WebAgentJoinProductMain extends React.Component<IWebAgentJoinProductMainProps, IWebAgentJoinProductMainState> {
    constructor(props: IWebAgentJoinProductMainProps) {
        super(props);
    }

    componentDidMount(): void {
        document.addEventListener("scroll", this.handleScroll.bind(this));
    }

    getContent(): Array<IWebAgentJoinProductMainContent> {
        const options: Array<IWebAgentJoinProductMainContent> = [
            {
                title: agentJoinProductName.Basic,
                content: "수 백만 사용자들의 첫 게이트웨이, \n 임팩트 있는 브랜딩 효과를 가져다 줍니다."
            },
            
            {
                title: agentJoinProductName.Focus,
                content: "수 백만 사용자들의 첫 게이트웨이, \n 임팩트 있는 브랜딩 효과를 가져다 줍니다."
            },
            {
                title: agentJoinProductName.Premium,
                content: "수 백만 사용자들의 첫 게이트웨이, \n 임팩트 있는 브랜딩 효과를 가져다 줍니다."
            },
            {
                title: agentJoinProductName.RedFeatured,
                content: "수 백만 사용자들의 첫 게이트웨이, \n 임팩트 있는 브랜딩 효과를 가져다 줍니다."
            },
            {
                title: agentJoinProductName.RedPremium,
                content: "수 백만 사용자들의 첫 게이트웨이, \n 임팩트 있는 브랜딩 효과를 가져다 줍니다."
            }
        ];
        return options;
    }
    handleScroll(): void {
        const activeClassName = "on";
        const currentTop = window.pageYOffset;
        const contents = document.querySelectorAll(".content");

        _.map(contents, (e: HTMLElement, i: number): void => {
            if ((currentTop + window.innerHeight) >= e.offsetTop + (e.offsetHeight / 4) ) {
                e.classList.add(activeClassName);
            } else {
                e.classList.remove(activeClassName);
            }
        });
    }

    render(): JSX.Element {
        const container = this.getContent();
        return <div className="product_main" onScroll={this.handleScroll.bind(this)}>
            <div className="top_content" ref="topContent">
                <div className="inner">
                    <h2 className="h2_title">내 매물에 맞는<br /> 광고를 선택하세요</h2>
                    <p className="h2_dsc">2백만 사용자들의 모든 창업순간,<br />당신의 부동산을 더 가치있게 전달하세요.</p>
                </div>
            </div>
            <div className="container">
                {_.map(container, (c, i:number) => {
                    return (
                        <div key={i} className={`content content` + (i + 1)}>
                            <div className="text_box">
                                <h3 className="h3_title"><span className="point">{c.title}</span></h3>
                                <p className="h3_dsc">{c.content}</p>
                                <a href="/ArticleItem/Detail#tab1__agentSign" className="btn_more">자세히 보기</a>
                            </div>
                            <div className="img"></div>
                        </div>
                    )
                })}
            </div>

        </div>;
    }
}