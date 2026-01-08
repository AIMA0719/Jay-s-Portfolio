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
      { 
        title: "설정 기반 아키텍처로 전환", 
        desc: "기존에는 '엔진 회전수'와 같은 데이터 식별자가 화면 코드에 직접 작성되어 있어, 새로운 차종을 지원할 때마다 여러 파일의 코드를 수정해야 했습니다. 이를 해결하기 위해 모든 대시보드 항목 정의를 'DashboardConfig' 한 곳에 집중시키고, 화면에서는 항목 ID만으로 설정을 참조 하도록 변경하여 새 차종 추가 시 설정 파일만 수정하면 되는 구조로 개선했습니다." 
      },
      { 
        title: "사용자 맞춤형 데이터 바인딩 시스템", 
        desc: "같은 '속도' 항목이라도 내연기관 차량의 엔진 ECU에서 제공하는 데이터 인덱스와 전기차의 VCU에서 제공하는 데이터 인덱스는 서로 다릅니 다. 사용자가 설정 화면에서 본인 차량에 맞는 데이터 인덱스를 선택하면, 해당 선택이 프로필별로 저장되고 대시보드에서는 저장된 설정에 따라 올바른 데이터를 자동으로 연결하는 동적 바인딩 시스템을 구현했습니다." 
      },
      { 
        title: "데이터 조회 성능 최적화", 
        desc: "대시보드에는 속도, RPM, 온도 등 수십 개의 게이지가 존재합니다. 기존에는 각 게이지가 화면에 표시될 때마다 개별적으로 DB를 조회했기 때문에, 한 페이지를 열 때 수십 번의 DB 접근이 발생하여 화면 로딩이 느려지는 문제가 있었습니다. 이를 해결하기 위해 'ParameterRepository'라는 중간 저장소를 만들었습니다. 페이지에 처음 진입할 때 해당 페이지에서 필요한 모든 파라미터 정보를 한 번에 DB에서 가져와 메모리에 저장해두고, 이후 각 게이지는 이 저장소에서 데이터를 꺼내 쓰도록 변경했습니다. 또한 같은 페이지를 다시 방문하면 DB 조회 없이 저장된 데이터를 재사용하도록 캐싱을 적용하여 페이지 전환 속도를 개선했습니다." 
      },
      { 
        title: "스레드 안전 스케줄링", 
        desc: "대시보드 페이지를 빠르게 스와이프할 때, 각 페이지마다 OBD 스캐너에 데이터 요청이 발생하여 블루투스 통신이 과부하되는 문제가 있었습 니다. 이를 해결하기 위해 ConcurrentLinkedQueue 기반의 요청 큐 시스템을 도입하여, 빠른 스와이프 시에도 가장 마지막 페이지의 요청만 실 행되도록 구현했습니다." 
      },
      { 
        title: "하이브리드 뷰 시스템", 
        desc: "기존의 XML 기반 커스텀 게이지(원형, 반원형, 바 게이지 등)를 유지하면서, 신규 텍스트형 게이지는 Jetpack Compose로 개발했습니다. ComposeView를 활용하여 기존 Fragment 내에서 Compose 컴포넌트를 통합하는 하이브리드 구조를 구현했으며, 이를 통해 점진적인 UI 현대화가 가능해졌습니다." 
      }
    ],
    technicalDetails: [
      {
        title: "1. 프로젝트 파일 구조",
        type: "code",
        content: `MOBD_Dashboard/
  ├── MOBD_MainDashboardFragment.java      # 뷰페이저 관리 및 스케줄링 총괄
  ├── MOBDDashboardViewModel.kt            # UI 상태 관리 및 데이터 스트림 제공
  ├── DashboardConfig.kt                   # 모든 대시보드 항목의 정의 및 속성 관리
  ├── DashboardSettingsDataStore.kt        # 사용자 설정 저장소 (선택한 데이터, 단위 등)
  ├── ParameterRepository.kt               # DB 조회 최적화 및 캐싱 계층
  ├── DashBoardItemList.java               # 설정 기반으로 실제 뷰 아이템 생성
  │
  ├── 하위 페이지
  │   ├── MOBD_DrivingDashboardFragment.kt # 주행 데이터 (Compose View 포함)
  │   ├── MOBD_TPMS_DashboardFragment.java # 타이어 공기압 전용
  │   └── MOBD_BatteryDashboardFragment.java
  │
  └── 커스텀 컴포넌트
      ├── MOBD_TextGauge.kt                # Compose 텍스트 기반 게이지
      ├── MOBD_ImageArcGauge.java          # 기존 원형 게이지
      └── MOBD_HorizontalBarGauge.java     # 기존 바 형태 게이지`
      },
      {
        title: "2. 아키텍처 개선: 하드코딩 vs 사용자 선택 구조",
        type: "text",
        content: ":::핵심 개념 : 데이터 인덱스는 차량 ECU에서 제공하는 각 센서 데이터를 식별하는 고유 문자열입니다.:::\n\n기존 레거시 코드는 데이터 Index가 뷰에 직접 명시되어 있어 확장이 불가능했습니다. 이를 사용자가 데이터를 선택하고 시스템이 이를 해석하여 실제 Index를 찾아오는 간접 참조 방식으로 변경하여 유연성을 확보했습니다."
      },
      {
        title: "AS-IS: 확장 불가능한 기존 하드코딩 구조",
        type: "diagram",
        content: JSON.stringify([
          { "box": "Fragment View", "desc": "observe('engine_speed')\n🔴 문제점: Index가 코드에 고정됨", "type": "error" },
          { "box": "Database", "desc": "SELECT * FROM param\nWHERE index = 'engine_speed'", "type": "default" }
        ])
      },
      {
        title: "TO-BE: SSOT를 적용한 사용자 선택형 유연 구조",
        type: "diagram",
        content: JSON.stringify([
          { "box": "DashboardConfig 설정 파일", "desc": "정의: 'speed'는 ['engine', 'vcu'] 지원", "type": "source" },
          { "box": "DataStore 사용자 설정", "desc": "선택: 사용자가 'vcu_speed'를 선택\nMapping: speed -> vcu_speed", "type": "process" },
          { "box": "Fragment View", "desc": "Code: observe(getKey('speed'))\n✅ 결과: 동적으로 'vcu_speed' 수신", "type": "solution" }
        ])
      },
      {
        title: "3. 스케줄링 최적화: 뷰페이저 스와이프 문제 해결",
        type: "text",
        content: "뷰페이저를 빠르게 넘길 때마다 블루투스 데이터 요청이 쌓여 앱이 멈추는 병목 현상이 발생했습니다. 이를 해결하기 위해 'ConcurrentLinkedQueue'를 도입하여 이전 페이지의 요청은 버리고 현재 보여지는 페이지의 요청만 처리하는 Last-Win 전략으로 개선했습니다."
      },
      {
        title: "Last-Win 전략을 적용한 스케줄링 프로세스 흐름",
        type: "diagram",
        content: JSON.stringify([
          { "box": "사용자 동작", "desc": "화면 빠르게 스와이프\n1페이지 → 2페이지 → 3페이지", "type": "default" },
          { "box": "ConcurrentLinkedQueue 요청 큐", "desc": "1. 1페이지 요청 (자동 취소됨)\n2. 2페이지 요청 (자동 취소됨)\n3. 3페이지 요청 (대기 중)", "type": "process" },
          { "box": "블루투스 매니저", "desc": "Polling Loop:\n큐에서 최신 요청 1개만 꺼내서 처리", "type": "solution" }
        ])
      }
    ],
    detailedTechStack: [
      { category: "Language", skills: ["Kotlin", "Java"] },
      { category: "Architecture", skills: ["MVVM", "Repository Pattern", "설정 기반 아키텍처"] },
      { category: "UI", skills: ["Jetpack Compose", "ViewPager2", "DataBinding", "Custom View"] },
      { category: "Async", skills: ["Coroutines", "ConcurrentLinkedQueue"] },
      { category: "Storage", skills: ["Room", "SharedPreferences", "GSON"] }
    ],
    highlightColor: "emerald"
  },
  {
    id: "p4",
    title: "배차 관리 기능",
    period: "2025.07 ~ 2025.08",
    overview: "B2B 전용 앱에서 기업용 차량의 배차 신청, 승인, 사용, 반납까지 전 과정을 관리하는 시스템입니다. 동일 시간대 중복 배차를 자동 방지하고, 배차 목적과 이력을 체계적으로 추적합니다.",
    team: "PM 1명, Android 1명, Server 1명, UX/UI 1명",
    scope: "법인 차량 배차 신청 플로우 및 차량 필터링 기능 전체 구현",
    keyFeatures: [
      { title: "Repository 패턴 적용", desc: "API 호출 로직과 비즈니스 로직을 분리하여 유지보수성 및 테스트 용이성 확보" },
      { title: "Flow 기반 비동기 처리", desc: "DispatchFragment의 데이터 스트림을 Flow로 리팩토링하여 반응형 데이터 처리" },
      { title: "Paging 3 적용", desc: "수백 대 이상의 차량 목록을 효율적으로 로드하기 위해 무한 스크롤 페이징 구현" },
      { title: "필터링 시스템", desc: "차량 타입, 상태별 필터 탭 기능 구현" },
      { title: "DTO 설계", desc: "배차 기안, 이력, 차량 정보 등 성격에 맞는 데이터 클래스 분리 설계" }
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
    overview: "Google AdMob 미디에이션을 통해 다수의 외부 광고 네트워크를 연결하고, 워터폴 알고리즘 기반으로 광고를 제공하는 시스템입니다. 사용자의 지역, 구독 상태 등을 확인하여 광고를 효율적으로 노출하고 수익 증가를 목표로 합니다.",
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
    overview: "기존 모바일/태블릿 환경에서 제공하던 OBD 실시간 데이터 조회 기능을 Android Auto 환경으로 확장한 프로젝트입니다. 표준 데이터와 제조사 전용 데이터 간 동적 전환을 지원하며, 휴대폰 앱과 차량 디스플레이 간 화면 상태를 자동 동기화합니다.",
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
    overview: "주유, 정비, 세차, 소모품 교체 등 차량 유지비를 통합 관리하는 가계부 시스템입니다. 월별 비용 비교와 항목별 지출 비중을 시각화하고, 소모품 교체 주기를 거리·시간 기준으로 자동 계산하여 알림을 제공합니다.",
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