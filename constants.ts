import { Project, SkillMetric, SkillCategory } from './types';
import { Smartphone, Zap, Database, Layout, BarChart3 } from 'lucide-react';

export const HERO_DATA = {
  name: "Android Engineer",
  summary: "사용자 중심의 모바일 서비스를 설계하고, 레거시 시스템을 현대적인 아키텍처로 개선하는 데 열정을 가진 안드로이드 개발자입니다.",
};

export const SKILL_METRICS: SkillMetric[] = [];
export const SKILL_CATEGORIES: SkillCategory[] = [];

export const PROJECTS: Project[] = [
  {
    id: "p2",
    title: "프리셋 대시보드 시스템",
    period: "2025.09 ~ 2025.12",
    overview: "차량 OBD 단말기와 연동하여 실시간 차량 상태를 모니터링하는 대시보드 입니다. 일반적인 표준 데이터 외에 제조사 고유 프로토콜 기반의 전문 데이터를 제공하고, 엔진·변속기·배터리 등 각기 다른 ECU의 데이터를 단일 화면에서 통합 확인 가능 합니다.",
    team: "PM 1명, Android 1명, iOS 1명, UX/UI 1명",
    scope: "Android 부분 MOBD 대시보드 전체 설계 및 구현",
    keyFeatures: [
      { title: "MVVM 아키텍처 설계", desc: "ViewModel + LiveData/StateFlow 기반 반응형 UI 구현" },
      { title: "Repository 패턴 적용", desc: "3-레이어 캐싱(페이지/단일/키 기반)으로 DB 쿼리 최적화" },
      { title: "성능 최적화", desc: "쓰로틀링, WeakReference 적용으로 메모리 누수 방지" },
      { title: "커스텀 뷰 개발", desc: "원형/반원형/바 게이지 등 6종 이상의 커스텀 뷰 구현" },
      { title: "단위 변환 시스템", desc: "압력(psi↔bar), 온도(°C↔°F) 등 다국어 단위 지원" },
      { title: "Compose 마이그레이션", desc: "MOBD 대시보드의 Jetpack Compose 전환" }
    ],
    detailedTechStack: [
      { category: "Language", skills: ["Kotlin", "Java"] },
      { category: "Architecture", skills: ["MVVM", "Repository Pattern", "Factory Pattern"] },
      { category: "UI", skills: ["Jetpack Compose", "ViewPager2", "DataBinding", "Custom View"] },
      { category: "Async", skills: ["Coroutines", "Handler/Looper"] },
      { category: "Storage", skills: ["Room", "SharedPreferences", "GSON"] }
    ],
    highlightColor: "emerald"
  },
  {
    id: "p4",
    title: "배차 관리 기능 (인포카 비즈)",
    period: "2025.07 ~ 2025.08",
    overview: "법인 차량 관리 서비스에서 배차 신청, 승인, 반려 프로세스를 디지털화하고 효율적인 차량 관리를 지원하는 시스템",
    team: "PM 1명, Android 1명, Server 1명, UX/UI 1명",
    scope: "법인 차량 배차 신청 플로우 및 차량 필터링 기능 전체 구현",
    keyFeatures: [
      { title: "Repository 패턴 적용", desc: "API 호출 로직과 비즈니스 로직을 분리하여 유지보수성 및 테스트 용이성 확보" },
      { title: "Flow 기반 비동기 처리", desc: "DispatchFragment의 데이터 스트림을 Flow로 리팩토링하여 반응형 데이터 처리" },
      { title: "Paging 3 적용", desc: "수백 대 이상의 차량 목록을 효율적으로 로드하기 위해 무한 스크롤 페이징 구현" },
      { title: "필터링 시스템", desc: "차량 타입, 상태(사용 가능/수리 중 등)별 필터 탭 기능 구현" },
      { title: "DTO 설계", desc: "배차 기안, 이력, 차량 정보 등 성격에 맞는 데이터 클래스(DTO) 분리 설계" }
    ],
    detailedTechStack: [
      { category: "Language", skills: ["Kotlin"] },
      { category: "Architecture", skills: ["MVVM + Repository 패턴"] },
      { category: "Async", skills: ["Coroutine", "Flow"] },
      { category: "Paging", skills: ["Paging 3"] },
      { category: "UI", skills: ["ViewBinding", "RecyclerView", "BottomSheet"] },
      { category: "Network", skills: ["Retrofit2 + Coroutine Adapter"] }
    ],
    highlightColor: "purple"
  },
  {
    id: "p5",
    title: "광고 시스템 리뉴얼",
    period: "2025.03 ~ 2025.05",
    overview: "단일 광고 네트워크의 수익 한계를 극복하고 글로벌 사용자(러시아/CIS 등)에게 최적화된 광고를 제공하기 위한 시스템 리뉴얼",
    team: "PM 1명, Android 1명, Data Analyst 1명",
    scope: "멀티 광고 네트워크 SDK 통합 및 워터폴/비딩 시스템 구조 설계",
    keyFeatures: [
      { title: "멀티 네트워크 통합", desc: "AdMob 외 Yandex, IronSource 등 5개 이상의 글로벌 광고 네트워크 SDK 통합" },
      { title: "GDPR/CCPA 대응", desc: "유럽 및 캘리포니아 사용자 대상 개인정보 처리 방침 동의 팝업 및 로직 구현" },
      { title: "광고 로드 최적화", desc: "네트워크 상태에 따라 타임아웃 설정 및 실패 시 재요청하는 Fallback 로직 설계" },
      { title: "비율 검사 로직", desc: "동영상 광고 등 세로 비율 광고가 UI를 깨뜨리는 것을 방지하기 위한 사전 검사 적용" }
    ],
    detailedTechStack: [
      { category: "Language", skills: ["Java", "Kotlin"] },
      { category: "Ad SDKs", skills: ["Google Admob", "Yandex", "IronSource", "Pangle", "AppLovin"] },
      { category: "Config", skills: ["Firebase Remote Config"] },
      { category: "Async", skills: ["Handler", "Coroutine"] }
    ],
    highlightColor: "orange"
  },
  {
    id: "p3",
    title: "Android Auto 연동",
    period: "2024.10 ~ 2025.02",
    overview: "운전 중 스마트폰 조작 없이 차량 디스플레이에서 데이터를 안전하게 확인하기 위한 Android Auto 서비스 및 데이터 동기화 구현",
    team: "PM 1명, Android 1명, UX/UI 1명",
    scope: "Android Auto용 대시보드 화면 개발 및 모바일 앱 양방향 동기화",
    keyFeatures: [
      { title: "CarAppService 구현", desc: "Android Auto 전용 세션 및 스크린 매니저를 구현하여 차량 연결 생명주기 관리" },
      { title: "화면 동기화", desc: "모바일 앱 내에서 대시보드 변경 시 차량 디스플레이에도 실시간 반영되도록 동기화 로직 구현" },
      { title: "스케줄 동기화", desc: "OBD 데이터 수신 주기를 앱과 Auto가 공유하여 데이터 불일치 방지" },
      { title: "백그라운드 연결", desc: "앱이 백그라운드/종료 상태에서도 Auto 연결 유지되도록 포그라운드 서비스 개발" },
      { title: "Demo 모드", desc: "차량 스캐너 연결 없는 환경에서도 UI 테스트가 가능한 더미 데이터 모드 개발" }
    ],
    detailedTechStack: [
      { category: "Language", skills: ["Kotlin"] },
      { category: "Platform", skills: ["Android Auto (Car App Library)"] },
      { category: "Communication", skills: ["BroadcastReceiver", "Service"] },
      { category: "State Mgmt", skills: ["LiveData"] }
    ],
    highlightColor: "indigo"
  },
  {
    id: "p1",
    title: "차계부 시스템 리뉴얼",
    period: "2022.10 ~ 2023.06",
    overview: "파편화된 주유/정비/세차 기록을 통합 관리하고 서버 동기화를 지원하여 사용자 경험을 개선한 차계부 시스템",
    team: "PM 1명, Android 1명, Server 1명, Design 1명",
    scope: "주유/정비/세차 기록 기능 전체 설계 및 소모품 관리 시스템 통합 개발",
    keyFeatures: [
      { title: "DB 설계 및 마이그레이션", desc: "FUELING, REPAIR, CARWASH 등 5개 핵심 테이블 설계 및 버전별 마이그레이션 구현" },
      { title: "커스텀 컴포넌트 개발", desc: "진동/애니메이션 숫자 키패드, Dot Decorator 달력, 갤러리 바텀시트 구현" },
      { title: "오피넷 API 연동", desc: "사용자 위치 기반 주유소 검색, 실시간 유가 정보 매핑 및 마커 클러스터링 처리" },
      { title: "서버 동기화", desc: "차계부 데이터 백업/복구 API 연동으로 기기 변경 시 데이터 유지 보장" },
      { title: "글로벌 대응", desc: "10개국 이상의 다국어 번역 적용 및 RTL(아랍어) 레이아웃 대응" }
    ],
    detailedTechStack: [
      { category: "Language", skills: ["Java", "Kotlin"] },
      { category: "Architecture", skills: ["MVC → 일부 MVP 전환"] },
      { category: "Database", skills: ["SQLite", "Room(일부)"] },
      { category: "Network", skills: ["Retrofit2", "OkHttp"] },
      { category: "UI", skills: ["RecyclerView", "BottomSheet", "Custom Calendar"] },
      { category: "Map", skills: ["Google Maps SDK"] },
      { category: "External API", skills: ["오피넷(OPINET) 주유소 API"] }
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