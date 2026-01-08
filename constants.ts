import { Project, SkillMetric, SkillCategory } from './types';
import { Smartphone, Zap, Database, Layout, BarChart3 } from 'lucide-react';

export const HERO_DATA = {
  name: "Android Engineer",
  summary: "사용자 중심의 모바일 서비스를 설계하고, 레거시 시스템을 현대적인 아키텍처로 개선하는 데 열정을 가진 안드로이드 개발자입니다.",
};

// Not used in UI anymore but kept for type compatibility if needed elsewhere
export const SKILL_METRICS: SkillMetric[] = [];
export const SKILL_CATEGORIES: SkillCategory[] = [];

export const PROJECTS: Project[] = [
  {
    id: "p4",
    title: "배차 관리 기능 (인포카 비즈)",
    period: "2025.07 ~ 2025.08 (약 2개월)",
    detailedTechStack: [
      { category: "Language", skills: ["Kotlin"] },
      { category: "Architecture", skills: ["MVVM + Repository 패턴"] },
      { category: "Async", skills: ["Coroutine", "Flow"] },
      { category: "Paging", skills: ["Paging 3"] },
      { category: "UI", skills: ["ViewBinding", "RecyclerView", "BottomSheet"] },
      { category: "Network", skills: ["Retrofit2 + Coroutine Adapter"] }
    ],
    situation: "법인 차량 관리 서비스에서 배차 신청, 승인, 반려 프로세스를 디지털화하고 효율적인 차량 관리가 필요했습니다.",
    task: "법인 차량 배차 신청 플로우 및 차량 선택/필터링 기능을 MVVM 아키텍처 기반으로 개발.",
    action: [
      "**Repository 패턴 적용**: API 호출 로직과 비즈니스 로직을 분리하여 유지보수성 및 테스트 용이성 확보.",
      "**Flow 기반 비동기 처리**: DispatchFragment의 데이터 스트림을 Flow로 리팩토링하여 반응형 데이터 처리.",
      "**Paging 3 적용**: 수백 대 이상의 차량 목록을 효율적으로 로드하기 위해 무한 스크롤 페이징 구현.",
      "**필터링 시스템**: 차량 타입, 상태(사용 가능/수리 중 등)별 필터 탭 기능 구현.",
      "**DTO 설계**: 배차 기안, 이력, 차량 정보 등 성격에 맞는 데이터 클래스(DTO) 분리 설계."
    ],
    result: [
      "Coroutine Scope를 Fragment 생명주기와 연결하여 메모리 누수 방지",
      "iOS 버전과의 크로스 체크를 통해 통일된 UI/UX 경험 제공",
      "스켈레톤 UI 적용으로 데이터 로딩 시 체감 속도 개선",
      "바텀시트 중복 호출 방지를 위한 세마포어(Semaphore) 로직 적용"
    ],
    highlightColor: "purple"
  },
  {
    id: "p5",
    title: "광고 시스템 리뉴얼",
    period: "2025.03 ~ 2025.05 (약 3개월)",
    detailedTechStack: [
      { category: "Language", skills: ["Java", "Kotlin"] },
      { category: "Ad SDKs", skills: ["Google Admob", "Yandex", "IronSource", "Pangle", "AppLovin"] },
      { category: "Config", skills: ["Firebase Remote Config"] },
      { category: "Async", skills: ["Handler", "Coroutine"] }
    ],
    situation: "단일 광고 네트워크의 수익 한계를 극복하고, 글로벌 사용자(특히 러시아/CIS)에게 최적화된 광고를 제공해야 했습니다.",
    task: "멀티 광고 네트워크 SDK 통합 및 GDPR/CCPA 법적 동의 처리, 워터폴/비딩 시스템 구조 설계.",
    action: [
      "**멀티 네트워크 통합**: AdMob 외 Yandex, IronSource 등 5개 이상의 글로벌 광고 네트워크 SDK 통합.",
      "**GDPR/CCPA 대응**: 유럽 및 캘리포니아 사용자 대상 개인정보 처리 방침 동의 팝업 및 로직 구현.",
      "**광고 로드 최적화**: 네트워크 상태에 따라 광고 로드 타임아웃을 설정하고 실패 시 재요청하는 Fallback 로직 설계.",
      "**비율 검사 로직**: 동영상 광고 등 세로 비율 광고가 UI를 깨뜨리는 것을 방지하기 위한 사전 검사(Aspect Ratio Check) 적용."
    ],
    result: [
      "러시아/CIS 지역 광고 Fill Rate 대폭 상승 및 수익 개선",
      "타임아웃 처리 로직 도입으로 앱 진입 시 광고 로딩으로 인한 지연 현상 제거",
      "글로벌 서비스 기준에 맞는 법적 리스크 해소"
    ],
    highlightColor: "orange"
  },
  {
    id: "p3",
    title: "Android Auto 연동",
    period: "2024.10 ~ 2025.02 (약 4개월)",
    detailedTechStack: [
      { category: "Language", skills: ["Kotlin"] },
      { category: "Platform", skills: ["Android Auto (Car App Library)"] },
      { category: "Communication", skills: ["BroadcastReceiver", "Service"] },
      { category: "State Mgmt", skills: ["LiveData"] }
    ],
    situation: "운전 중 스마트폰 조작 없이 차량 디스플레이에서 데이터를 안전하게 확인하고자 하는 니즈가 증가했습니다.",
    task: "Android Auto용 대시보드 화면 개발 및 모바일 앱과의 양방향 데이터/화면 동기화 시스템 구축.",
    action: [
      "**CarAppService 구현**: Android Auto 전용 세션 및 스크린 매니저를 구현하여 차량 연결 생명주기 관리.",
      "**화면 동기화**: 모바일 앱 내에서 대시보드 변경 시 차량 디스플레이에도 실시간 반영되도록 동기화 로직 구현.",
      "**스케줄 동기화**: OBD 데이터 수신 주기를 앱과 Auto가 공유하여 데이터 불일치 방지.",
      "**백그라운드 연결**: 앱이 백그라운드에 있거나 종료된 상태에서도 Auto 연결이 유지되도록 포그라운드 서비스 개발.",
      "**Demo 모드**: 실제 차량 스캐너가 연결되지 않은 환경에서도 UI 테스트가 가능하도록 더미 데이터 모드 개발."
    ],
    result: [
      "리스트 갱신 최적화(DiffUtil 유사 방식)로 불필요한 렌더링 90% 감소",
      "Context 참조 시 Null Check 캡슐화로 NPE 방지 및 안정성 확보",
      "ECU 서칭 중 클릭 제한 로직 추가로 주행 중 사용자 오류 방지",
      "ActivityThread ForegroundServiceDidNotStartInTime 이슈 해결로 서비스 안정성 확보"
    ],
    highlightColor: "indigo"
  },
  {
    id: "p2",
    title: "프리셋 대시보드 시스템",
    period: "2024.09 ~ 2024.12 (약 4개월)",
    detailedTechStack: [
      { category: "Language", skills: ["Kotlin"] },
      { category: "Architecture", skills: ["MVVM"] },
      { category: "UI", skills: ["Jetpack Compose", "XML (하이브리드)"] },
      { category: "State Mgmt", skills: ["LiveData", "StateFlow"] },
      { category: "DI", skills: ["수동 의존성 주입"] },
      { category: "Async", skills: ["Coroutine"] }
    ],
    situation: "OBD 실시간 차량 데이터를 시각화하는 대시보드의 레거시 코드를 개선하고, 제조사별 다양한 데이터 규격을 표준화해야 했습니다.",
    task: "대시보드 UI/UX 설계 및 Jetpack Compose 마이그레이션, 성능 최적화 및 메모리 누수 해결.",
    action: [
      "**Compose 마이그레이션**: 기존 XML 기반의 복잡한 설정 페이지를 Jetpack Compose로 전환하여 코드 간소화.",
      "**데이터 인덱싱 시스템**: 하드코딩 되어있던 OBD 파라미터 매핑을 DataStore 기반의 동적 인덱싱 구조로 개선.",
      "**단위 변환 시스템**: 온도(°C/°F), 압력(kPa/psi/bar), 거리(km/mi) 등 사용자 설정에 따른 실시간 값 변환 로직 구현.",
      "**반응형 레이아웃**: 태블릿, 가로 모드, 세로 모드 등 다양한 화면 환경에 대응하는 유연한 UI 구축.",
      "**대시보드 페이지 구현**: 주행 정보, 배터리 상태, TPMS(타이어), 흡/배기 데이터 시각화 컴포넌트 개발."
    ],
    result: [
      "Static Map 캐싱 방식을 LiveData Observe 패턴으로 전환하여 데이터 흐름 개선",
      "메모리 누수 해결로 ANR 발생률 80% 감소",
      "화면 회전 시 발생하던 Binding Null 이슈 원천 차단",
      "인포카/인포카비즈 앱 분기 처리를 통한 공통 모듈 코드 재사용성 향상"
    ],
    highlightColor: "emerald"
  },
  {
    id: "p1",
    title: "차계부 시스템 리뉴얼",
    period: "2022.10 ~ 2023.06 (약 9개월)",
    detailedTechStack: [
      { category: "Language", skills: ["Java", "Kotlin"] },
      { category: "Architecture", skills: ["MVC → 일부 MVP 전환"] },
      { category: "Database", skills: ["SQLite", "Room(일부)"] },
      { category: "Network", skills: ["Retrofit2", "OkHttp"] },
      { category: "UI", skills: ["RecyclerView", "BottomSheet", "Custom Calendar", "Custom Keyboard"] },
      { category: "Map", skills: ["Google Maps SDK"] },
      { category: "External API", skills: ["오피넷(OPINET) 주유소 API"] }
    ],
    situation: "기존 차계부의 파편화된 데이터와 불편한 UX로 인해 사용자 이탈이 발생했으며, 주유/정비/세차 기록의 통합 관리 및 서버 동기화가 필요했습니다.",
    task: "주유/정비/세차 기록 기능 전체 설계 및 소모품 관리 시스템, 주유소 검색 기능을 통합 개발했습니다.",
    action: [
      "**DB 설계 및 마이그레이션**: FUELING, REPAIR, CARWASH 등 5개 핵심 테이블 설계 및 버전별 마이그레이션 로직 구현.",
      "**커스텀 컴포넌트 개발**: 진동/애니메이션이 포함된 숫자 키패드, Dot Decorator가 적용된 달력, 갤러리 바텀시트 구현.",
      "**오피넷 API 연동**: 사용자 위치 기반 주유소 검색, 실시간 유가 정보 매핑 및 마커 클러스터링 처리.",
      "**서버 동기화**: 차계부 데이터 백업/복구 API 연동으로 기기 변경 시 데이터 유지 보장.",
      "**글로벌 대응**: 10개국 이상의 다국어 번역 적용 및 RTL(아랍어) 레이아웃 대응."
    ],
    result: [
      "기존 차계부 대비 사용자 입력 단계 40% 감소 (3단계 → 1단계 플로우)",
      "사진 압축 로직 개선으로 업로드 속도 50% 향상",
      "주유소 자동 검색 도입으로 수동 입력 오류 대폭 감소"
    ],
    highlightColor: "blue"
  }
];

export const ICONS_MAP = {
  mobile: Smartphone,
  fast: Zap,
  data: Database,
  ui: Layout,
  chart: BarChart3
};