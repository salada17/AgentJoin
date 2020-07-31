/// <reference path="../../../../sugarhill.officesquare.web/scripts/index.tsx" />
/// <reference path="../../components/index.tsx" />


interface IAgentCustomerPopupProps {
    onClose(): void;
}

interface IAgentCustomerPopupState {
}

class AgentCustomerPopup extends React.Component<IAgentCustomerPopupProps, IAgentCustomerPopupState> {
    constructor(props: IAgentCustomerPopupProps) {
        super(props);
    }

    render(): JSX.Element {
        return <div className="popup_wrap customer_popup">
            <div className="popup_container">
                <div className="popup">
                    <h2 className="popup_h2_title">네모 안심 고객센터</h2>
                    <p className="phone_number">1599-4385</p>
                    <p className="time">(월~금 9:30~18:00)</p>
                    <p className="content_text">무엇을 도와드릴까요? <br />전문 상담사가 대기중입니다.</p>
                    <button type="button" className="btn_close" onClick={this.props.onClose}><span className="blind">팝업창 닫기</span></button>
                </div>
            </div>
        </div>;
    }
}