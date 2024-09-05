export const sessionTimeLabelLookup: Record<number, string> = {
  1: "13:00 ~ 13:40",
  2: "13:40 ~ 14:20",
  3: "14:35 ~ 14:55",
  4: "15:30 ~ 16:10",
  5: "16:25 ~ 16:45",
  6: "17:00 ~ 17:40",
  7: "17:40 ~",
};

export const sessionTagColorLookup: Record<string, string> = {
  Devops: "bg-blue-500/70",
  AI: "bg-red-500/70",
  Backend: "bg-green-500/70",
  Frontend: "bg-yellow-500/70",
  "커리어/경험": "bg-purple-500/70",
};

const track1 = {
  track: "트랙 1",
  sessions: [
    {
      title: "오프닝",
      description: "AUSG 8th Organizer 송승호",
      order: 1,
    },
    {
      title: "Private 환경에서 Kubernetes를 활용한 자율주행 PaaS 구축기",
      description: `발표 내용은 Docker 기반 플랫폼에서 Kubernetes Cluster 환경으로의 전환 이야기를 다루고자 합니다. 과정에서 발생한 문제와 고민을 소개하고 이를 어떻게 해결 했으며, 앞으로 남은 과제를 소개하고자 합니다.

파트리지시스템즈는 자율주행 데이터 분석 플랫폼을 자율주행 연구팀에 서비스를 하고 있으며, 차량 도메인은 보안에 대한 중요도가 굉장히 높고, 방대한 데이터가 실시간으로 수집됩니다. 따라서 Private한 자체 쿠버네티스 클러스터 구축이 필요했으며 폐쇄망으로 배포되어야 한다는 필수 보안 요구 조건이 있습니다.

위 문제를 해결하기 위해 다양한 오픈소스와 자체 개발한 내용들을 바탕으로 어떻게 CI/CD를 구축했으며, Application 운영  안정성을 위한 LGTM 스택 기반의 모니터링 시스템을 구축하며 주어진 문제들을 어떻게 풀어나갔는지 발표하고자 합니다.`,
      tags: ["Devops"],
      speaker: {
        name: "김창환",
        title: "파트리지시스템즈",
        image: "/session/김창환.jpeg",
      },
      order: 2,
    },
    {
      title: "LLM은 스캠인가",
      description: `LLM이 무엇인가요?
LLM으로 뭘 할 수 있나요?
그거 그냥 LLM 쓰면 안되나요?
라는 궁금증에 대한 답변을 드리고 싶습니다.

현재 뜨거운 감자인 LLM에 대한 개념, 활용법 그리고 한계점에 대해 공유합니다.`,
      tags: ["AI"],
      speaker: {
        name: "김연수",
        title: "업스테이지",
        image: "/session/김연수.jpeg",
        AUSG: true,
      },
      order: 3,
    },
    {
      title: "아무것도 모르던 코더가 살아남기",
      description: `개발을 아무것도 모르던 고졸 취업자에서 지금까지 엔지니어로 살아오면서 사소한 경험들 부터 다양한 개발이야기까지
지금 돌아보면 아쉬운 것들을 솔직하게 공유 드리고 싶습니다~!`,
      tags: ["Backend", "커리어/경험"],
      speaker: {
        name: "김민태",
        title: "우아한형제들",
        image: "/session/김민태.jpg",
        AUSG: true,
      },
      order: 4,
    },
    {
      title: "TBD",
      description: `TBD`,
      order: 5,
    },
    {
      title: "Hey, Jina",
      description: `어떤 한 지식을 공유하기보다, 제가 직접 겪은 소중한 경험들을 공유하려고 합니다.
우리는 무엇을 만들어야 할까요?
소프트웨어를 개발할때 어떤 마음가짐을 가져야 할까요?
위와 같은 질문에 스스로 답을 해볼때 여러분들은 어떤 답을 할건가요?
다양한 사례와 그 중 Jina와 연관지어 우리는 어떤 엔지니어가 되어야할지
여러분들에게 질문을 던지고 싶습니다.`,
      tags: ["커리어/경험"],
      speaker: {
        name: "송주영",
        title: "LG UPLUS",
        image: "/session/avatar.png",
      },
      order: 6,
    },
    {
      title: "이벤트",
      description: "AUSGCON 2024",
      order: 7,
    },
  ],
};

const track2 = {
  track: "트랙 2",
  sessions: [
    {
      title: "오프닝",
      description: "AUSGCON 2024",
      order: 1,
    },
    {
      title: "gRPC와 함께 알아보는 같이 일하고 싶은 엔지니어",
      description: `이 발표는 두가지 이야기를 다룹니다.
gRPC에 대해 먼저 이야기하고 함께 일하고 싶었던 엔지니어는 어떤 사람이었는지 기술에 대한 관점과 함께 이야기해봅니다.`,
      tags: ["Backend", "커리어/경험"],
      speaker: {
        name: "김한수",
        title: "뱅크샐러드",
        image: "/session/김한수.png",
        AUSG: true,
      },
      order: 2,
    },
    {
      title: "신입의 클라우드 엔지니어 적응기",
      description: `내가 바로 정지우다.`,
      tags: ["Devops", "커리어/경험"],
      speaker: {
        name: "정지우",
        title: "여기어때컴퍼니",
        image: "/session/정지우.jpg",
        AUSG: true,
      },
      order: 3,
    },
    {
      title: "from ICN to NRT - 위피를 일본에 런칭하기까지.",
      description: `한국 시장에서 성공한 "위피"를 일본 시장에 새롭게 선보이기까지의 과정을 1인 백엔드 엔지니어의 시각에서 공유합니다. 
기획과 설계 단계부터 구현 및 런칭까지, 단 한 명의 백엔드 엔지니어로서 겪었던 다양한 도전과 해결 과정을 이야기합니다.`,
      tags: ["Backend"],
      speaker: {
        name: "변준석",
        title: "엔라이즈",
        image: "/session/변준석.jpg",
        AUSG: true,
      },
      order: 4,
    },
    {
      title: "어디서도 보지 못한 GitHub Actions의 마법",
      description: `CI/CD 환경을 고도화하면서 겪은 이야기와 GitHub Actions를 이용한 여러 마술들을 소개드립니다.`,
      tags: ["Devops"],
      speaker: {
        name: "김수빈",
        title: "당근",
        image: "/session/김수빈.png",
        AUSG: true,
      },
      order: 5,
    },
    {
      title: "Hey, Jina",
      description: `어떤 한 지식을 공유하기보다, 제가 직접 겪은 소중한 경험들을 공유하려고 합니다.
우리는 무엇을 만들어야 할까요?
소프트웨어를 개발할때 어떤 마음가짐을 가져야 할까요?
위와 같은 질문에 스스로 답을 해볼때 여러분들은 어떤 답을 할건가요?
다양한 사례와 그 중 Jina와 연관지어 우리는 어떤 엔지니어가 되어야할지
여러분들에게 질문을 던지고 싶습니다.`,
      tags: ["커리어/경험"],
      speaker: {
        name: "송주영",
        title: "LG UPLUS",
        image: "/session/avatar.png",
      },
      order: 6,
    },
    {
      title: "이벤트",
      description: "AUSGCON 2024",
      order: 7,
    },
  ],
};

const track3 = {
  track: "트랙 3",
  sessions: [
    {
      title: "오프닝",
      description: "AUSGCON 2024",
      order: 1,
    },
    {
      title: "Solutions Architect를 아시나요?",
      description: `첫 커리어로 AWS에 SA로 오기까지 고민하고 겪어온 것들, 그리고 1년 간 AWS에서 일하며 느낀 점과 커리어에 대한 생각을 캐주얼하게 이야기합니다.`,
      tags: ["커리어/경험"],
      speaker: {
        name: "김윤서",
        title: "AWS",
        image: "/session/김윤서.jpeg",
        AUSG: true,
      },
      order: 2,
    },
    {
      title: "EC2로 Bastion host 구축, 그게 최선인가요?",
      description: `기존의 EC2로 Bastion Host를 구축하는 방식에서 직면한 문제를 해결하기 위해, 새로운 접근법으로 Bastion Host를 구축한 과정과 그 경험을 공유합니다. 
이와 더불어, 보안과 편의의 균형을 찾는 고민에 대해서도 이야기를 나눠보려 합니다.`,
      tags: ["Devops"],
      speaker: {
        name: "안지완",
        title: "몰로코",
        image: "/session/안지완.png",
        AUSG: true,
      },
      order: 3,
    },
    {
      title: "휴학, 디지털 노마드, AI, 그리고 깃허브 스타 1.3k",
      description: `<휴학, 노마드, AI, 그리고 깃허브 스타 1.2k>

1월, 새벽 한 시에 떠오른 아이디어를 두서없이 적었던 노션 페이지 한 장은 시간이 흘러 깃허브 스타 1200개를 돌파한 어엿한 오픈소스 프로젝트가 되었습니다.
아직 학부도 졸업하지 않은 공대생 세 명으로 이루어진 AutoRAG 팀은, 포르투갈에서, 일본에서, 태국에서, 그리고 발리에서 AutoRAG를 개발하고 홍보했습니다. 

어떻게 오픈소스 프로젝트를 시작했고 만들었는지. 
오픈소스 프로젝트를 어떻게 홍보했는지.
그 어려움 그리고 시행착오를 공유하려 합니다.
더불어, 디지털 노마드에 대한 이야기도 공유하고 싶습니다.
마지막으로, 간단한 RAG의 개념과 AutoRAG를 많은 분들께 소개하고 싶습니다.`,
      tags: ["AI"],
      speaker: {
        name: "김동규",
        title: "마커 AI",
        image: "/session/김동규.jpg",
      },
      order: 4,
    },
    {
      title: "TBD",
      description: `당근 내에서 앱과 웹뷰 사이의 통신(브릿지)을 만들때 있었던 회고 포인트를 공유하고 현재 시점의 개선된 모습을 살펴보며 
-- 
(1) 인터페이스 설계와 
(2) 자동화된 워크플로우 구축
(3) 메타프로그래밍 
(4) 인터페이스 향상성 등의 주요 인사이트들을 공유합니다.`,
      tags: ["Frontend"],
      speaker: {
        name: "원지혁 (Tony)",
        title: "당근",
        image: "/session/avatar.png",
        AUSG: true,
      },
      order: 5,
    },
    {
      title: "Hey, Jina",
      description: `어떤 한 지식을 공유하기보다, 제가 직접 겪은 소중한 경험들을 공유하려고 합니다.
우리는 무엇을 만들어야 할까요?
소프트웨어를 개발할때 어떤 마음가짐을 가져야 할까요?
위와 같은 질문에 스스로 답을 해볼때 여러분들은 어떤 답을 할건가요?
다양한 사례와 그 중 Jina와 연관지어 우리는 어떤 엔지니어가 되어야할지
여러분들에게 질문을 던지고 싶습니다.`,
      tags: ["커리어/경험"],
      speaker: {
        name: "송주영",
        title: "LG UPLUS",
        image: "/session/avatar.png",
      },
      order: 6,
    },
    {
      title: "이벤트",
      description: "AUSGCON 2024",
      order: 7,
    },
  ],
};

export const sessionList = [track1, track2, track3];
