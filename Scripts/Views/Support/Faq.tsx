/// <reference path="../../../../sugarhill.officesquare.web/scripts/index.tsx" />
/// <reference path="../../components/index.tsx" />

enum faqTag {
    Basic = 1,
    Focus,
    Premium,
    RedFeatured,
    RedPremium,
    Information,
    Search
}

enum faqTagName {
    Basic = "기본",
    Focus = "포커스",
    Premium = "프리미엄",
    RedFeatured = "지역추천 중개업소",
    RedPremium = "프리미엄 중개업소",
}

interface IWebSupportFaqProps {
    webAgentJoinRenderType: WebAgentJoinRenderType;
}

interface IWebSupportFaqState {
    tag: faqTag;
}

interface IWebSupportFaqContent {
    faqTag: faqTag;
    infomationIndex: number;
    priceIndex: number;
    title: string;
    content: string;
}

class WebSupportFaq extends React.Component<IWebSupportFaqProps, IWebSupportFaqState> {
    constructor(props: IWebSupportFaqProps) {
        super(props);
        this.state = {
            tag: this.getFaqTag()
        };
    }

    getFaqContents(): Array<IWebSupportFaqContent> {
        const options: Array<IWebSupportFaqContent> = [
            {
                faqTag: faqTag.Basic,
                infomationIndex: -1, 
                priceIndex: 1,
                title: "Q. 일반매물상품은 무엇인가요?",
                content: "네모에 매물을 등록해 광고하실 수 있는 기본 상품으로 10건 단위로 구매하실 수 있습니다."
            },
            {
                faqTag: faqTag.Basic,
                infomationIndex: 2,
                priceIndex: 8,
                title: "Q. 네모 상품 이용기간은 어떻게 되나요?					",
                content: "1개월, 3개월, 6개월 단위로 이용 가능하며 광고 시작일에 따라 첫 1개월 산정 기준이 상이합니다. 자세한 문의는 고객센터(1599-4385)로 연락주시면 담당자로부터 안내받으실 수 있습니다."
            },
            {
                faqTag: faqTag.Basic,
                infomationIndex: -1, 
                priceIndex: 9,
                title: "Q. 등록한 매물이 거래 완료되면 사용 가능한 매물 개수가 줄어드나요?",
                content: "줄어들지 않습니다.매물 개수는 슬롯제로 운영되며, 등록하신 매물 중 일부가 거래 완료되었다면 그만큼 다른 매물로 광고를 등록하실 수 있습니다. \n" +
                    "ex) 등록한 매물 중 2개 거래 완료 > 2개 매물 거래 완료 처리 > 새로운 매물 2개 등록 가능)"
            },
            {
                faqTag: faqTag.Basic,
                infomationIndex: -1, 
                priceIndex: -1,
                title: "Q. 매물 노출 방법이 어떻게 되나요?",
                content: "등록해주신 매물은 일반 매물목록에서 이용자의 사용 환경에 따라 랜덤 노출되며 5분 간격으로 새로고침됩니다."
            },
            {
                faqTag: faqTag.Basic,
                infomationIndex: -1, 
                priceIndex: -1,
                title: "Q. 공인중개사가 아니어도 매물을 등록할 수 있나요?",
                content: "직거래 회원도 매물 등록 가능하십니다. 2건, 4건 단위로 구매 가능하며, 네모 고객센터(1599-4385)를 통하여 상품 금액 안내 받으실 수 있습니다."
            },
            {
                faqTag: faqTag.Basic,
                infomationIndex: 1,
                priceIndex: 5,
                title: "Q. 상품 가입은 어떻게 할 수 있나요?",
                content: "네모 고객센터(1599-4385)를 통하여 상품 가입 안내 받으실 수 있습니다."
            },
            {
                faqTag: faqTag.Basic,
                infomationIndex: -1, 
                priceIndex: 6,
                title: "Q. 할인을 받을 수 있는 방법은 없나요?",
                content: "상품 계약 기간에 따라 3개월 5% 할인, 6개월 10% 할인이 제공됩니다."
            },
            {
                faqTag: faqTag.Basic,
                infomationIndex: -1, 
                priceIndex: 7,
                title: "Q. 이용 중인 상품을 다른 상품으로 변경할 수 있나요?",
                content: "이용 중인 상품은 상품 변경이 불가합니다. 다른 상품을 사용하고자 하시는 경우, 신규로 상품을 구매해주셔야 합니다."
            },
            {
                faqTag: faqTag.Basic,
                infomationIndex: -1, 
                priceIndex: -1,
                title: "Q. 일반 매물 상품과 포커스, 프리미엄 매물 상품을 함께 구매할 수 있나요?",
                content: "함께 구매 가능합니다.일반 매물 상품과 포커스, 프리미엄 매물 상품을 활용해 함께 광고하실 수 있습니다."
            },
            {
                faqTag: faqTag.Focus,
                infomationIndex: -1, 
                priceIndex: 3,
                title: "Q. 포커스 매물 상품은 무엇인가요?",
                content: "포커스 매물 상품은 일반 매물 상품 또는 프리미엄 매물 상품을 구매해주셔야만 이용이 가능합니다."
            },
            {
                faqTag: faqTag.Focus,
                infomationIndex: -1, 
                priceIndex: -1,
                title: "Q. 일반 매물 상품 또는 프리미엄 매물 상품을 꼭 이용해야하나요?",
                content: "등록하신 매물에 포커스 라벨을 추가하여 광고할 수 있는 상품으로 일반 매물 목록의 상위에 노출됩니다."
            },
            {
                faqTag: faqTag.Focus,
                infomationIndex: -1, 
                priceIndex: -1,
                title: "Q. 포커스 매물 상품을 구매하면 매물을 몇 개까지 등록 가능한가요?",
                content: "최대 200개까지 구매 가능하며 등록하신 매물에 자유롭게 설정하실 수 있습니다."
            },
            {
                faqTag: faqTag.Focus,
                infomationIndex: -1, 
                priceIndex: -1,
                title: "Q. 포커스 매물 상품을 구매하면 어떤 매물이 상위에 노출되나요?",
                content: "포커스 매물로 설정된 매물은 지도 내 매물목록에서는 최상단에, 법정동 또는 지하철 역으로 검색된 경우에는 프리미엄 매물목록과 일반 매물목록 사이에 노출됩니다. "
            },
            {
                faqTag: faqTag.Focus,
                infomationIndex: -1, 
                priceIndex: -1,
                title: "Q. 매물 노출 방법이 어떻게 되나요?",
                content: "등록해주신 매물은 매물목록에서 이용자의 사용 환경에 따라 랜덤 노출되며 5분 간격으로 새로고침됩니다."
            },
            {
                faqTag: faqTag.Focus,
                infomationIndex: -1, 
                priceIndex: -1,
                title: "Q. 상품 가입은 어떻게 할 수 있나요?",
                content: "네모 고객센터(1599-4385)를 통하여 상품 가입 안내 받으실 수 있습니다."
            },
            {
                faqTag: faqTag.Focus,
                infomationIndex: -1, 
                priceIndex: -1,
                title: "Q. 할인을 받을 수 있는 방법은 없나요?",
                content: "계약기간에 따른 3개월 5% 할인, 6개월 10% 할인과 프로모션 할인이 제공됩니다. 자세한 문의는 네모 영업 담당자를 통해 안내받으실 수 있습니다."
            },
            {
                faqTag: faqTag.Focus,
                infomationIndex: -1, 
                priceIndex: -1,
                title: "Q. 이용 중인 상품을 다른 상품으로 변경할 수 있나요?",
                content: "이용 중인 상품은 상품 변경이 불가합니다. 다른 상품을 사용하고자 하시는 경우, 신규로 상품을 구매해주셔야 합니다."
            },
            {
                faqTag: faqTag.Premium,
                infomationIndex: -1, 
                priceIndex: 2,
                title: "Q. 프리미엄 매물 상품은 무엇인가요?",
                content: "법정동, 지하철역 검색 시 매물목록 최상단에 매물 2개와 중개업소명을 노출할 수 있는 상품으로 최대 4개 중개업소만 입점이 가능합니다."
            },
            {
                faqTag: faqTag.Premium,
                infomationIndex: -1, 
                priceIndex: -1,
                title: "Q. 프리미엄 매물 상품을 구매하면 매물을 몇 개까지 등록 가능한가요?",
                content: "프리미엄 상품 구매 시, 프리미엄 상품 1개 당 일반 매물 10개가 기본 제공됩니다. \n" +
                         "그 외 추가등록을 희망하시는 경우 일반 매물 상품을 추가 구매해주시면 됩니다."
            },
            {
                faqTag: faqTag.Premium,
                infomationIndex: -1, 
                priceIndex: -1,
                title: "Q. 프리미엄 매물 상품을 구매하면 어떤 매물이 상위에 노출되나요?",
                content: "지하철역 상품은 해당 지하철역 반경 1km 이내에 위치한 매물이, 법정동 상품은 해당 동에 위치한 매물 2개가 랜덤으로 상위 노출됩니다."
            },
            {
                faqTag: faqTag.Premium,
                infomationIndex: 4,
                priceIndex: -1,
                title: "Q. 매물 노출 방법이 어떻게 되나요?",
                content: "등록해주신 매물은 프리미엄과 일반 매물 각 구역에서 이용자의 사용 환경에 따라 랜덤 노출되며 5분 간격으로 새로고침됩니다."
            },
            {
                faqTag: faqTag.Premium,
                infomationIndex: -1, 
                priceIndex: -1,
                title: "Q. 프리미엄 매물 사용 중인데 다른 지역에 매물 올려도 되나요?",
                content: "등록 가능합니다. 구매하신 프리미엄 상품의 지역에 매물을 등록하신 경우 매물 2개가 상위 랜덤 노출되고, 그 외 지역에 등록된 매물은 해당 지역의 일반 매물 목록에서 랜덤 노출됩니다."
            },
            {
                faqTag: faqTag.Premium,
                infomationIndex: -1, 
                priceIndex: -1,
                title: "Q. 상품 가입은 어떻게 할 수 있나요?",
                content: "네모 고객센터(1599-4385)를 통하여 상품 가입 안내 받으실 수 있습니다."
            },
            {
                faqTag: faqTag.Premium,
                infomationIndex: -1, 
                priceIndex: -1,
                title: "Q. 입점을 희망하지만 이미 4개 공인중개사 사무소가 입점해있습니다. 어떻게 해야 하나요?",
                content: "네모 영업 담당자에게 문의 주시면 프리미엄 상품 예약 관련 안내 받으실 수 있습니다. \n"+
                    "(단, 유료 이용자인 경우에만 예약이 가능합니다.)"
            },
            {
                faqTag: faqTag.Premium,
                infomationIndex: 3,
                priceIndex:-1,
                title: "Q. 할인을 받을 수 있는 방법은 없나요?",
                content: "계약기간에 따른 3개월 5% 할인, 6개월 10% 할인과 프로모션 할인이 제공됩니다. 자세한 문의는 네모 영업 담당자를 통해 안내받으실 수 있습니다."
            },
            {
                faqTag: faqTag.Premium,
                infomationIndex: -1, 
                priceIndex: -1,
                title: "Q. 이용 중인 상품을 다른 상품으로 변경할 수 있나요?",
                content: "이용 중인 상품은 상품 변경이 불가합니다. 다른 상품을 사용하고자 하시는 경우, 신규로 상품을 구매해주셔야 합니다."
            },
            {
                faqTag: faqTag.RedFeatured,
                infomationIndex: -1, 
                priceIndex: 4,
                title: "Q. 네모레드는 무엇인가요?",
                content: "매물이 아닌 중개업소의 이름, 사진, 주소 및 매물현황 등을 광고하실 수 있는 상품으로 중개업소 목록에 노출됩니다."
            },
            {
                faqTag: faqTag.RedFeatured,
                infomationIndex: -1, 
                priceIndex: -1,
                title: "Q. 네모레드 상품 구성이 어떻게 되나요?",
                content: "프리미엄 중개업소 상품, 지역추천중개업소으로 구분되어 있습니다."
            },
            {
                faqTag: faqTag.RedFeatured,
                infomationIndex: -1, 
                priceIndex: -1,
                title: "Q. 프리미엄 중개업소 상품과 지역추천 중개업소 상품은 어떤 차이가 있나요?",
                content: "프리미엄 중개업소 상품은 중개업소 소재지와 상관없이 구매 가능하며 최대 3개 중개사무소만 입점 가능합니다. \n" +
                         "지역추전 중개업소 상품은 중개업소가 소재한 지역에만 구매 가능하며 최대 5개 중개업소만 입점 가능합니다."
            },
            {
                faqTag: faqTag.RedFeatured,
                infomationIndex: -1, 
                priceIndex: -1,
                title: "Q. 네모레드 노출 방법은 어떻게 되나요?",
                content: "프리미엄 중개업소 상품은 3곳, 지역추천 중개업소 상품은 5곳이 각각 5분 간격으로 랜덤 노출됩니다."
            },
            {
                faqTag: faqTag.RedFeatured,
                infomationIndex: -1, 
                priceIndex: -1,
                title: "Q. 프리미엄 중개업소 상품과 지역추천 중개업소 상품을 같은 지역에 함께 구매할 수 있나요?",
                content: "같은 지역에 프리미엄 중개업소 상품과 지역추천 중개업소 상품 동시 구매는 불가합니다."
            },
            {
                faqTag: faqTag.RedFeatured,
                infomationIndex: -1, 
                priceIndex: -1,
                title: "Q. 네모 레드는 꼭 매물을 등록하여야만 중개업소가 노출되나요?",
                content: "아닙니다. 네모에 공인중개사 회원으로 가입만 되어있으셔도 일반 중개업소 영역에 보입니다."
            },
            {
                faqTag: faqTag.RedFeatured,
                infomationIndex: -1, 
                priceIndex: -1,
                title: "Q. 프리미엄 매물 상품과 네모레드는 어떤 차이가 있나요?",
                content: "네모 매물 프리미엄 상품은 등록한 매물을 상위 노출할 수 있지만, 네모레드는 중개업소 브랜드를 홍보하실수 있는 상품입니다."
            },
            {
                faqTag: faqTag.RedFeatured,
                infomationIndex: -1, 
                priceIndex: -1,
                title: "Q. 프리미엄 매물 상품과 지역추천 중개업소 상품을 함께 구매할 수 있나요?",
                content: "동시에 구매하실 수 있습니다. 이용하시는 상품은 각각 매물목록과 중개업소 목록에 광고 적용됩니다."
            },
            {
                faqTag: faqTag.RedPremium,
                infomationIndex: -1, 
                priceIndex: -1,
                title: "Q. 네모레드 어떤 상품인가요?",
                content: "매물이 아닌 중개업소의 이름, 사진, 주소 및 매물현황 등을 광고하실 수 있는 상품으로 중개업소 목록에 노출됩니다. "
            },
            {
                faqTag: faqTag.RedPremium,
                infomationIndex: -1, 
                priceIndex: -1,
                title: "Q. 네모레드 상품 구성이 어떻게 되나요?",
                content: "프리미엄 중개업소 상품, 지역추천중개업소으로 구분되어 있습니다."
            },
            {
                faqTag: faqTag.RedPremium,
                infomationIndex: -1, 
                priceIndex: -1,
                title: "Q. 프리미엄 중개업소 상품과 지역추천 중개업소 상품은 어떤 차이가 있나요?",
                content: "프리미엄 중개업소 상품은 중개업소 소재지와 상관없이 구매 가능하며 최대 3개 중개사무소만 입점 가능합니다. \n" +
                         "지역추전 중개업소 상품은 중개업소가 소재한 지역에만 구매 가능하며 최대 5개 중개업소만 입점 가능합니다."
            },
            {
                faqTag: faqTag.RedPremium,
                infomationIndex: -1, 
                priceIndex: -1,
                title: "Q. 네모레드 노출 방법은 어떻게 되나요?",
                content: "프리미엄 중개업소 상품은 3곳, 지역추천 중개업소 상품은 5곳이 각각 5분 간격으로 랜덤 노출됩니다."
            },
            {
                faqTag: faqTag.RedPremium,
                infomationIndex: -1, 
                priceIndex: -1,
                title: "Q. 프리미엄 중개업소 상품과 지역추천 중개업소 상품을 같은 지역에 함께 구매할 수 있나요?",
                content: "같은 지역에 프리미엄 중개업소 상품과 지역추천 중개업소 상품 동시 구매는 불가합니다."
            },
            {
                faqTag: faqTag.RedPremium,
                infomationIndex: -1, 
                priceIndex: -1,
                title: "Q. 네모 레드는 꼭 매물을 등록하여야만 중개업소가 노출되나요?",
                content: "아닙니다. 네모에 공인중개사 회원으로 가입만 되어있으셔도 일반 중개업소 영역에 보입니다."
            },
            {
                faqTag: faqTag.RedPremium,
                infomationIndex: -1, 
                priceIndex: -1,
                title: "Q. 프리미엄 매물 상품과 네모레드는 어떤 차이가 있나요?",
                content: "네모 매물 프리미엄 상품은 등록한 매물을 상위 노출할 수 있지만, 네모레드는 중개업소 브랜드를 홍보하실수 있는 상품입니다."
            },
            {
                faqTag: faqTag.RedPremium,
                infomationIndex: -1, 
                priceIndex: -1,
                title: "Q. 프리미엄 매물 상품과 지역추천 중개업소 상품을 함께 구매할 수 있나요?",
                content: "동시에 구매하실 수 있습니다. 이용하시는 상품은 각각 매물목록과 중개업소 목록에 광고 적용됩니다."
            },
        ];

        return options;
    }

    getFaqTag(): faqTag {
        let tag: faqTag = 0;

        switch (this.props.webAgentJoinRenderType) {
            case WebAgentJoinRenderType.Information:
                tag = faqTag.Information;
                break;
            case WebAgentJoinRenderType.ProductDetailBasic:
                tag = faqTag.Basic;
                break;
            case WebAgentJoinRenderType.ProductDetailFocus:
                tag = faqTag.Focus;
                break;
            case WebAgentJoinRenderType.ProductDetailPremium:
                tag = faqTag.Premium;
                break;
            case WebAgentJoinRenderType.ProductDetailRedFeatured:
                tag = faqTag.RedFeatured;
                break;
            case WebAgentJoinRenderType.ProductDetailRedPremium:
                tag = faqTag.RedPremium;
                break;
            case WebAgentJoinRenderType.Search:
                tag = faqTag.Search;
                break;
            default:
                return tag = faqTag.Basic;
        };

        return tag;
    }

    handleFaqTag(tag: faqTag): void {
        this.state.tag = tag;
        this.setState(this.state);
    }

    handleToggleFaqButton(i: number, e: Event): void {
        const activeClassName = "on";

        const targetElement: HTMLElement = e.target as HTMLElement;
        const targetParent: HTMLElement = targetElement.closest("ul");
        const LiElement: HTMLElement = targetParent.querySelectorAll("li")[i];
        const activeElement = targetParent.querySelector(".on");

        let moveDuration: number = 200;

        if (!LiElement.classList.contains(activeClassName)) {
            let targetHeadHeight: number = LiElement.querySelector(".title").clientHeight;
            let targetContentHeight: number = LiElement.querySelector(".content").clientHeight;
            let targetMoveHeight: number = targetHeadHeight + targetContentHeight;

            LiElement.classList.add(activeClassName);
            $(LiElement).animate({ height: targetMoveHeight }, moveDuration);
        }

        if (activeElement){
            let activeHeadHeight: number = activeElement.querySelector(".title").clientHeight;
            let activeMoveHeight: number = activeHeadHeight;

            activeElement.classList.remove(activeClassName);
            $(activeElement).animate({ height: activeMoveHeight }, moveDuration);
        }
    }
   
    renderFaqList(): JSX.Element {
        let options: Array<IWebSupportFaqContent> = [];
        if (this.state.tag === faqTag.Information) {
            options = _.sortBy(_.filter(this.getFaqContents(), (o) => {
                return o.infomationIndex > 0;
            }), "infomationIndex");
        } else if (this.state.tag === faqTag.Search) {
            options = _.sortBy(_.filter(this.getFaqContents(), (c) => {
                return c.priceIndex > 0;
            }), "priceIndex");
        }else if (this.state.tag > 0) {
            options = _.filter(this.getFaqContents(), (c) => {
                return c.faqTag === this.state.tag;
            });
        }  else {
            options = this.getFaqContents();
        }

        return (
            <ul className="list_faq">
                {_.map(options, (o, i: number) => {
                    return (
                        <li key={i} className="faq_container" onClick={this.handleToggleFaqButton.bind(this, i)}>
                            <strong className="title">{o.title}</strong>
                            <p className="content">{o.content}</p>
                            <span className="btn_list_more"><span className="blind">보기</span></span>
                        </li>
                    )
                })}
            </ul>
        );
    }

    renderFaqAllList(): JSX.Element {
        let faqTagType: faqTag = 0;
        let options: Array<IWebSupportFaqContent> = [];
        if (faqTagType > 0) {
            //faqTagType
            options = _.filter(this.getFaqContents(), (c) => {
                return c.faqTag === faqTagType;
            });
        } else {
            // all
            options = this.getFaqContents();
        }

        return (
            <div className="customer inner">
                <div className="h2_area">
                    <h2 className="h2_title">자주묻는질문</h2>
                </div>
                <div className="support_menu">
                    <ul className="support_menu_list">
                        <li data-tag={faqTag.Basic} className={`tag_name ${this.state.tag === faqTag.Basic ? "on" : ""}`} ref="tag_name" onClick={this.handleFaqTag.bind(this, faqTag.Basic)}>
                            <span>{faqTagName.Basic}</span>
                        </li>
                        <li data-tag={faqTag.Focus} className={`tag_name ${this.state.tag === faqTag.Focus ? "on" : ""}`} onClick={this.handleFaqTag.bind(this, faqTag.Focus)}>
                            <span>{faqTagName.Focus}</span>
                        </li>
                        <li data-tag={faqTag.Premium} className={`tag_name ${this.state.tag === faqTag.Premium ? "on" : ""}`} onClick={this.handleFaqTag.bind(this, faqTag.Premium)}>
                            <span>{faqTagName.Premium}</span>
                        </li>
                        <li data-tag={faqTag.RedFeatured} className={`tag_name ${this.state.tag === faqTag.RedFeatured ? "on" : ""}`} onClick={this.handleFaqTag.bind(this, faqTag.RedFeatured)}>
                            <span>{faqTagName.RedFeatured}</span>
                        </li>
                        <li data-tag={faqTag.RedPremium} className={`tag_name ${this.state.tag === faqTag.RedPremium ? " on" : ""}`} onClick={this.handleFaqTag.bind(this, faqTag.RedPremium)}>
                            <span>{faqTagName.RedPremium}</span>
                        </li>
                    </ul>
                </div>
                <div className="faq_content">
                    <ul className="list_faq">
                        {this.renderFaqList()}
                    </ul>
                    <div className="btn_center">
                        <button type="button" className="btn_red_border">더보기</button>
                    </div>
                </div>
            </div>
        );
    }

    render(): JSX.Element {
        return <div>
            {this.props.webAgentJoinRenderType !== WebAgentJoinRenderType.Faq && this.renderFaqList()}
            {this.props.webAgentJoinRenderType === WebAgentJoinRenderType.Faq && this.renderFaqAllList()}
        </div>;
    }
}