import { Project, SkillMetric } from './types';
import { Smartphone, Zap, Database, Layout, BarChart3 } from 'lucide-react';

export const HERO_DATA = {
  name: "Android Engineer",
  title: "Senior Android Developer (4 Years)",
  summary: "기술적 깊이와 비즈니스 임팩트를 동시에 추구하는 안드로이드 개발자입니다. 복잡한 레거시 시스템의 현대화부터 대규모 트래픽 처리까지, 데이터에 기반한 성능 최적화와 안정적인 아키텍처 설계를 전문으로 합니다.",
  stats: [
    { label: "Projects Delivered", value: "5+" },
    { label: "Avg Perf Boost", value: "45%" },
    { label: "Code Reduction", value: "40%" },
  ]
};

export const SKILL_METRICS: SkillMetric[] = [
  { subject: 'Architecture', A: 90, fullMark: 100 },
  { subject: 'Performance', A: 95, fullMark: 100 },
  { subject: 'UI/UX (Compose)', A: 85, fullMark: 100 },
  { subject: 'Legacy Migration', A: 90, fullMark: 100 },
  { subject: 'Concurrency', A: 80, fullMark: 100 },
  { subject: 'CI/CD', A: 75, fullMark: 100 },
];

export const PROJECTS: Project[] = [
  {
    id: "p1",
    title: "차계부 시스템 리뉴얼",
    period: "2022.10 ~ 2023.06",
    role: "Core Developer",
    techStack: ["RxJava3", "Room Database", "DataBridge Pattern", "Normalization"],
    situation: "기존 단일 테이블(CARBOOK) 구조의 비효율성으로 인한 데이터 관리 어려움 및 확장성 한계 직면.",
    task: "5개 테이블(FUELING, REPAIR 등) 정규화 재설계 및 레거시 데이터의 무손실 마이그레이션 달성.",
    action: [
      "기존 단일 테이블 구조를 정규화하여 데이터 무결성 확보",
      "RxJava3를 도입하여 복잡한 비동기 데이터 처리 흐름 제어",
      "자체 개발한 `CarBookDBMigrationManager`를 통해 대용량 기존 데이터의 무손실 이관 로직 구현",
      "DataBridge 패턴을 적용하여 구버전 데이터와 신규 구조 간의 호환성 레이어 구축"
    ],
    result: [
      "사용자 데이터 입력 단계 40% 감소로 UX 대폭 개선",
      "이미지 압축 알고리즘 도입으로 업로드 속도 50% 향상",
      "다국어 및 RTL(아랍어) 레이아웃 완벽 대응으로 글로벌 서비스 기반 마련"
    ],
    highlightColor: "blue"
  },
  {
    id: "p2",
    title: "프리셋 대시보드 시스템",
    period: "2024.09 ~ 2024.12",
    role: "Lead Developer",
    techStack: ["Jetpack Compose", "DataStore", "Lifecycle-aware", "Observer Pattern"],
    situation: "OBD 차량 데이터 시각화 과정에서 메모리 누수로 인한 잦은 ANR 발생 및 XML 기반 UI의 유지보수 어려움.",
    task: "UI 프레임워크를 Jetpack Compose로 현대화하고, 메모리 관리 구조를 개선하여 앱 안정성 확보.",
    action: [
      "XML 뷰 시스템을 Jetpack Compose로 전면 전환하여 선언형 UI 도입",
      "Lifecycle-aware 컴포넌트와 Observer 패턴을 적용하여 뷰와 데이터의 생명주기 불일치 해결",
      "하드코딩된 설정 데이터를 DataStore 기반의 인덱싱 구조로 전환하여 유연성 확보"
    ],
    result: [
      "ANR 발생률 80% 감소로 앱 안정성 극대화",
      "보일러플레이트 코드 제거로 전체 코드량 44% 감소 (464줄 → 258줄)",
      "렌더링 성능 최적화 달성"
    ],
    highlightColor: "emerald"
  },
  {
    id: "p3",
    title: "Android Auto 연동 서비스",
    period: "2024.10 ~ 2025.02",
    role: "Feature Owner",
    techStack: ["Car App Library", "Foreground Service", "Handler", "Throttling"],
    situation: "운전 중 사용자 경험 확장을 위해 모바일 앱과 차량 디스플레이 간의 유기적인 연결 필요.",
    task: "Car App Library 기반의 신규 서비스 구축 및 백그라운드 연결 안정성 확보.",
    action: [
      "Foreground Service를 활용하여 앱이 백그라운드 상태일 때도 차량 연결 유지",
      "Handler 기반 메시지 패싱 구조를 설계하여 앱과 Auto 간 실시간 화면 동기화 구현",
      "1초 단위 Throttling 기법을 적용하여 주행 데이터 갱신 시 발생하는 불필요한 리렌더링 방지"
    ],
    result: [
      "과도한 렌더링 부하 90% 제거로 시스템 리소스 절약",
      "앱 종료 상태에서도 Android Auto 단독 동작이 가능한 견고한 아키텍처 구축",
      "운전자 안전을 고려한 UX 가이드라인 준수"
    ],
    highlightColor: "indigo"
  },
  {
    id: "p4",
    title: "법인 차량 배차 관리 시스템",
    period: "2025.07 ~ 2025.08",
    role: "Frontend Engineer (Android)",
    techStack: ["Coroutine", "Flow", "Paging 3", "Semaphore", "Repository Pattern"],
    situation: "복잡한 법인 차량 배차 프로세스 처리 시 동시성 이슈 및 UI 반응성 저하 발생.",
    task: "대량의 배차 데이터를 효율적으로 로딩하고 사용자 조작 실수(중복 터치 등)를 방지하는 UI 구현.",
    action: [
      "Coroutine Flow와 Paging 3 라이브러리를 도입하여 대용량 리스트의 무한 스크롤 성능 최적화",
      "Repository 패턴을 적용하여 데이터 소스(Remote/Local)와 UI 계층 분리",
      "바텀시트 연속 호출 방지를 위해 `Semaphore`를 활용한 동시성 제어 로직 구현",
      "스켈레톤 UI를 도입하여 데이터 로딩 시 체감 대기 시간 단축"
    ],
    result: [
      "Fragment Lifecycle 연동을 통한 메모리 누수 원천 차단",
      "iOS 플랫폼과 UI/UX 통일성을 확보하여 일관된 브랜드 경험 제공",
      "안정적인 동시성 제어로 앱 크래시 방지"
    ],
    highlightColor: "purple"
  },
  {
    id: "p5",
    title: "광고 시스템 글로벌 리뉴얼",
    period: "2025.03 ~ 2025.05",
    role: "System Engineer",
    techStack: ["AdMob Mediation", "Firebase Remote Config", "Custom Adapter", "UMP SDK"],
    situation: "단일 광고 네트워크 의존으로 인한 수익 한계 및 글로벌 프라이버시 규정(GDPR/CCPA) 준수 필요.",
    task: "멀티 네트워크 미디에이션 통합 및 지역별 맞춤형 광고 정책 수립 시스템 구축.",
    action: [
      "AdMob 기반으로 IronSource, Yandex 등 멀티 네트워크 미디에이션 통합",
      "동유럽 지역 수익화를 위해 Yandex Custom Adapter를 직접 구현",
      "UMP(User Messaging Platform) SDK를 적용하여 글로벌 개인정보 보호 규정 준수 프로세스 정립",
      "광고 초기화 로직을 병렬 처리로 변경하고 Firebase Remote Config로 실시간 제어 가능하도록 구현"
    ],
    result: [
      "동유럽 지역 광고 수익 사각지대 해소로 전체 매출 증대 기여",
      "앱 시작(Cold Start) 속도 개선",
      "법적 리스크 없이 글로벌 서비스 운영 가능한 기반 마련"
    ],
    highlightColor: "orange"
  }
];

export const ICONS_MAP = {
  mobile: Smartphone,
  fast: Zap,
  data: Database,
  ui: Layout,
  chart: BarChart3
};
