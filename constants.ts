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
        title: "2. 아키텍처 개선: 하드코딩(AS-IS) → 설정 기반 유연 구조(TO-BE)",
        type: "diagram",
        content: JSON.stringify([
          { "box": "AS-IS: Fragment View", "desc": "observe('engine_speed')\n🔴 문제점: Index가 코드에 고정되어 확장 불가", "type": "error" },
          { "box": "AS-IS: Database", "desc": "SELECT * FROM param\nWHERE index = 'engine_speed'", "type": "error" },
          { "box": "⚡ Architecture Refactoring", "desc": "설정 파일(SSOT)과 사용자 설정(DataStore)을 통한\n의존성 분리 및 동적 바인딩 구현", "type": "default" },
          { "box": "TO-BE 1. DashboardConfig", "desc": "정의: 'speed'는 ['engine', 'vcu'] 지원\n(모든 설정의 원천)", "type": "source" },
          { "box": "TO-BE 2. DataStore", "desc": "선택: 사용자가 'vcu_speed'를 선택\nMapping: speed → vcu_speed", "type": "process" },
          { "box": "TO-BE 3. Fragment View", "desc": "Code: observe(getKey('speed'))\n✅ 결과: 동적으로 'vcu_speed' 수신", "type": "solution" }
        ])
      },
      {
        title: "3. 핵심 문제 해결 및 최적화 (Troubleshooting)",
        type: "text",
        content: ":::1. 프로파일 기반 설정 격리 (데이터 충돌 방지):::\n문제: 차량 변경 시 이전 차량의 설정값(DataStore)이 남아있어 데이터가 오동작하는 치명적인 버그가 있었습니다.\n해결: 설정 저장 시 키 생성 로직에 `profile_id`를 접두어로 포함시켜, 차량별로 저장소 공간을 논리적으로 격리했습니다.\n효과: 다수의 차량을 등록해도 설정 충돌이 발생하지 않으며, 각 차량 고유의 데이터 매핑이 완벽하게 보존됩니다.\n\n:::2. 멀티스레드 안정성 및 스케줄링 큐잉:::\n문제: 다중 스레드 접근 시 `ConcurrentModificationException`이 발생하고, 빠른 화면 전환 시 블루투스 요청이 병목을 일으켰습니다.\n해결: `ConcurrentHashMap`으로 스레드 안전성을 확보하고, `ConcurrentLinkedQueue` 기반의 Last-Win 전략을 도입하여 이전 페이지의 요청을 자동 취소했습니다.\n효과: 멀티스레드 환경 크래시 0건 달성 및 스와이프 시 끊김 없는 데이터 스트림을 구현했습니다.\n\n:::3. 데이터 식별 정확도 및 3단계 캐싱:::\n문제: 표준/제조사 데이터 키가 중복될 때 충돌이 발생하고, 잦은 DB 조회로 프레임 드랍이 있었습니다.\n해결: 제조사 데이터에 복합 키(`index|ecu_cmd`) 전략을 적용하여 식별성을 강화하고, `ParameterRepository`에 3단계(페이지-개별-키) 메모리 캐싱을 적용했습니다.\n효과: DB 쿼리 횟수 90% 감소로 화면 로딩 속도를 획기적으로 개선했습니다.\n\n:::4. Hybrid UI (XML + Compose) 통합:::\n문제: 기존 XML 레이아웃 기반의 수십 개 게이지를 한 번에 재작성하는 것은 리스크가 컸습니다.\n해결: `ComposeView`를 활용하여 신규 텍스트형 게이지부터 점진적으로 Jetpack Compose로 전환하는 하이브리드 구조를 채택했습니다.\n효과: 레거시 시스템의 안정성을 유지하면서도 최신 UI 기술을 성공적으로 도입했습니다."
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
    title: "배차 관리 시스템",
    period: "2025.07 ~ 2025.08",
    overview: "B2B 전용 앱에서 기업용 차량의 배차 신청, 승인, 사용, 반납까지 전 과정을 관리하는 시스템입니다. MVVM 아키텍처와 Kotlin Coroutines 기반의 반응형 데이터 처리를 도입하여 실시간 배차 현황을 제공하고, 중복 배차 방지 및 자동화된 유효성 검사 로직을 구현했습니다.",
    team: "PM 1명, Android 1명, Server 1명, UX/UI 1명",
    scope: "법인 차량 배차 신청 플로우 및 차량 필터링 기능 전체 구현",
    keyFeatures: [
      { title: "Coroutine + Flow 비동기 아키텍처", desc: "기존 콜백 기반의 비동기 처리를 Coroutine과 Flow로 전면 리팩토링했습니다. viewModelScope를 활용해 생명주기를 관리하여 메모리 누수를 방지하고, Result 패턴을 도입해 성공/실패 케이스를 명확하게 분리 처리했습니다." },
      { title: "StateFlow 기반 상태 관리", desc: "UI 상태(목록, 로딩, 에러 등)를 MutableStateFlow로 중앙에서 관리하고, View에서는 asStateFlow()로 노출된 불변 상태를 구독(Collect)하는 구조로 변경하여 데이터 일관성을 확보했습니다." },
      { title: "Sealed Class 기반 동적 폼", desc: "체크박스, 시간 선택, 차량 선택 등 다양한 입력 타입이 혼재된 배차 신청 화면을 Sealed Class로 모델링하여, 컴파일 타임에 타입 안전성을 보장하고 RecyclerView에서 뷰 타입을 동적으로 렌더링하도록 구현했습니다." },
      { title: "스레드 안전한 Repository 패턴", desc: "API 통신 로직을 Repository 계층으로 격리하고 Double-Checked Locking 방식으로 Singleton을 구현하여, 다중 스레드 환경에서도 안전하게 데이터에 접근하고 불필요한 객체 생성을 방지했습니다." },
      { title: "지능형 데이터 검증 로직", desc: "사용자가 종료 시간을 시작 시간보다 빠르게 설정하는 등 논리적 오류 발생 시, 시스템이 이를 감지하여 종료 시간을 '시작 시간 + 30분'으로 자동 보정해주는 UX 친화적인 검증 로직을 ViewModel에 탑재했습니다." }
    ],
    technicalDetails: [
      {
        title: "1. 프로젝트 파일 구조",
        type: "code",
        content: `biz/Fragments/Dispatch/
  ├── DispatchFragment.kt          # 배차 목록 UI (StateFlow 구독)
  ├── DispatchViewModel.kt         # 상태 관리, 페이징, 필터 로직
  ├── DispatchRepository.kt        # Singleton, API 통신, Flow 변환
  ├── DispatchAdapter.kt           # 목록 렌더링
  │
  ├── DraftFragment.kt             # 배차 신청/상세 화면
  ├── DraftViewModel.kt            # 신청 폼 상태 및 시간 유효성 검사
  ├── DraftAdapter.kt              # Sealed Class 기반 동적 폼 어댑터
  │
  ├── FilterView.kt                # 커스텀 필터 UI
  └── DispatchFragmentComplete.kt  # Compose 기반 UI (실험적 도입)

  biz/DB/BIZ/Entities/
  ├── DISPATCH.kt                  # 배차 목록 Room Entity
  └── DRAFT.kt                     # 신청서 Room Entity

  biz/Server/
  └── RetrofitInterfaceBizKt.kt    # Suspend 함수 API 정의`
      },
      {
        title: "2. 단방향 데이터 흐름 (Unidirectional Data Flow)",
        type: "diagram",
        content: JSON.stringify([
          { "box": "UI Layer (Fragment)", "desc": "User Action: 스크롤/필터 변경\nObserve: collect(newItemList)", "type": "source" },
          { "box": "ViewModel Layer", "desc": "Logic: 중복 요청 방지, 페이징 계산\nState: _state.value update", "type": "process" },
          { "box": "Repository Layer", "desc": "Stream: Flow<Result>\nCache: In-memory Caching", "type": "process" },
          { "box": "Data Layer (Remote/DB)", "desc": "Retrofit: Suspend API Call\nRoom: Entity Mapping", "type": "solution" }
        ])
      },
      {
        title: "3. 핵심 로직 및 최적화 전략 (Core Logic)",
        type: "text",
        content: ":::1. Sealed Class를 활용한 다형성 폼 관리:::\n문제: 배차 신청 화면은 '시간 선택', '차량 선택', '목적 입력' 등 서로 다른 UI 요소가 복잡하게 섞여 있어 관리가 어려웠습니다.\n해결: `DraftItem`이라는 Sealed Class를 정의하고 `AllDay`, `Time`, `Selection` 등의 하위 타입을 만들었습니다. Adapter에서는 `when` 식을 사용하여 각 타입에 맞는 ViewHolder를 정확하게 생성하고 바인딩합니다.\n효과: 새로운 입력 타입이 추가되더라도 기존 코드를 수정할 필요 없이 타입만 확장하면 되므로 유지보수성이 크게 향상되었습니다.\n\n:::2. Double-Checked Locking Singleton:::\n문제: 여러 화면에서 동시에 Repository에 접근할 때 불필요한 인스턴스가 생성되거나 동시성 문제가 발생할 우려가 있었습니다.\n해결: `synchronized` 블록과 `volatile` 키워드를 사용한 Double-Checked Locking 패턴을 적용하여, 멀티스레드 환경에서도 안전하고 효율적인 싱글톤 인스턴스 생성을 보장했습니다.\n효과: 메모리 낭비를 막고 앱 전체에서 일관된 데이터 소스를 공유할 수 있게 되었습니다.\n\n:::3. 자동 시간 보정 알고리즘:::\n문제: 사용자가 실수로 종료 시간을 시작 시간보다 앞서게 설정하면 배차 신청이 실패하거나 데이터 무결성이 깨졌습니다.\n해결: `DraftViewModel` 내에 시간 검증 로직을 두어, 시작 시간이 종료 시간보다 늦어지는 순간 자동으로 종료 시간을 '시작 시간 + 30분'으로 재계산하여 업데이트합니다.\n효과: 사용자 실수를 사전에 방지하고 별도의 에러 팝업 없이 자연스러운 UX 흐름을 제공했습니다."
      }
    ],
    detailedTechStack: [
      { category: "Language", skills: ["Kotlin"] },
      { category: "Architecture", skills: ["MVVM", "Repository Pattern", "Singleton"] },
      { category: "Async", skills: ["Coroutines", "Flow", "StateFlow"] },
      { category: "UI Logic", skills: ["Sealed Class (Polymorphism)", "DiffUtil"] },
      { category: "Network", skills: ["Retrofit2", "Result Pattern"] }
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
      { title: "AdMob 미디에이션 기반 광고 통합 시스템 구축", desc: "기존에는 단일 광고 네트워크만 사용하여 광고 채우기율(Fill Rate)이 낮고 수익이 제한적이었습니다. 이를 해결하기 위해 Google AdMob 미디에이션을 도입하여 Yandex 등 외부 광고 네트워크를 연결하고, 워터폴 방식으로 광고 요청이 실패하면 다음 네트워크로 자동 전환되도록 구현했습니다. 이를 통해 광고 채우기율을 높이고 수익을 개선했습니다." },
      { title: "광고 타입별 전용 Manager 설계", desc: "배너, 네이티브, 전면, 보상형, 앱오픈 광고 등 5가지 광고 타입을 각각 독립된 Manager 클래스로 분리하여 관리합니다. 싱글톤 패턴을 적용하여 메모리 효율을 높이고, 각 Manager가 광고 로드/표시/해제의 생명주기를 독립적으로 관리하도록 설계했습니다." },
      { title: "조건부 광고 노출 시스템 구현", desc: "사용자 경험을 해치지 않으면서 수익을 극대화하기 위해 다층 조건 검사 시스템을 구현했습니다. 지역(한국/일본 제외), 구독 상태, 자사 스캐너 구매 여부, 네트워크 상태 등을 종합적으로 판단하여 광고 노출 여부를 결정합니다. 또한 'N일간 보지 않기' 기능을 통해 사용자가 광고 빈도를 조절할 수 있도록 했습니다." },
      { title: "자체 광고 시스템과 AdMob 통합", desc: "서버에서 제공하는 자체 프로모션 광고와 AdMob 광고를 하나의 뷰에서 통합 관리하는 CustomNativeView를 개발했습니다. 화면별로 적절한 광고 타입을 자동 선택하고, 자체 광고가 없을 경우 AdMob 광고로 대체되는 폴백 로직을 구현했습니다." },
      { title: "GDPR 동의 및 광고 초기화 흐름 설계", desc: "유럽 사용자를 위한 GDPR 동의 절차를 UserMessagingPlatform으로 구현하고, 동의 완료 후에만 광고 SDK가 초기화되도록 설계했습니다. 앱 시작 시 네이티브 광고를 병렬로 미리 로드하여 첫 화면 진입 시 광고가 즉시 표시되도록 최적화했습니다." }
    ],
    technicalDetails: [
      {
        title: "1. 주요 파일 구조",
        type: "code",
        content: `Tools/AD/
  ├── AdMob/
  │   ├── BannerAdManager.java          # 배너 광고 (싱글톤)
  │   ├── NativeAdManager.java          # 네이티브 광고 (병렬 로드)
  │   ├── InterstitialAdManager.java    # 전면 광고
  │   ├── RewardAdManager.java          # 보상형 광고
  │   └── AppFinishNativeAd.java        # 앱 종료 시 광고
  │
  ├── InfocarAd/
  │   ├── InfocarAdManager.java         # 서버 기반 자체 광고
  │   ├── InfocarPopupAdDialog.java     # 팝업 광고
  │   └── SubscriptionDialog.java       # 구독 프로모션
  │
  ├── YandexAdsEvent/                   # 미디에이션 어댑터
  │   ├── CustomEvent.java
  │   └── YandexBannerEventLoader.java
  │
  └── Tools/
      ├── Manager/GdprManager.java      # GDPR 동의 및 초기화
      └── View/CustomNativeView.java    # 자체광고 + AdMob 통합 뷰`
      },
      {
        title: "2. 광고 시스템 아키텍처",
        type: "diagram",
        content: JSON.stringify([
          { "box": "1. 초기화 계층 (Initialization)", "desc": "GdprManager\n• GDPR 동의 요청 (UMP SDK)\n• MobileAds.initialize() 수행\n• 네이티브 광고 병렬 로드 시작", "type": "source" },
          { "box": "2. 매니저 계층 (AdManagers)", "desc": "타입별 독립 Manager (싱글톤)\n• Banner/Native/Reward 등 기능 분리\n• 로드/캐싱/생명주기 관리", "type": "process" },
          { "box": "3. 뷰 계층 (Custom Views)", "desc": "통합 뷰 시스템 (CustomNativeView)\n• AdMob(미디에이션) 표시\n• 로드 실패/지연 시 Fallback 처리", "type": "process" },
          { "box": "4. 자체 광고 계층 (Fallback)", "desc": "InfocarAdManager (서버 기반)\n• 모든 네트워크 실패 시 최후 수단\n• 자체 프로모션 및 공지 사항 노출", "type": "solution" }
        ])
      },
      {
        title: "3. 핵심 문제 해결 및 최적화 (Troubleshooting)",
        type: "text",
        content: ":::1. 세로 동영상 광고로 인한 UI 붕괴 방지:::\n문제: 네이티브 광고 영역에 '세로 비율(Portrait)' 동영상이 로드될 경우 레이아웃이 깨지는 현상이 발생했습니다.\n해결: `NativeAdManager`에서 미디어의 Aspect Ratio를 사전에 검사하여, 비율이 1.0 미만(세로)인 경우 최대 3회까지 재요청하는 로직을 추가했습니다.\n효과: UI 일관성을 유지하고, 사용자 경험에 최적화된 가로형 광고를 우선적으로 노출했습니다.\n\n:::2. 스플래시 로딩 속도 70% 단축 (병렬 처리):::\n문제: 5가지 타입(배너, 메인, 메뉴, 종료 등)의 광고를 순차적으로 로드하다 보니 앱 진입 속도가 크게 지연되었습니다.\n해결: `CompletableFuture`를 도입하여 모든 광고 로딩을 병렬로 처리하고, 10초 타임아웃을 설정하여 무한 대기를 방지했습니다.\n효과: 초기 광고 준비 시간을 기존 5초에서 1.5초 수준으로 약 70% 단축했습니다.\n\n:::3. 중복 노출 및 불필요한 요청 제거:::\n문제: Fragment 재생성 시마다 동일한 광고가 반복 로드되거나, 구독자에게도 광고 요청이 발생하는 낭비가 있었습니다.\n해결: 마지막으로 노출된 Fragment의 클래스명을 추적하여 중복 표시를 방지하고, 지역·구독·스캐너 연결 여부를 종합 판단하는 `AdvertisingTerms()` 검증 함수를 구현했습니다.\n효과: 불필요한 네트워크 리소스 소모를 줄이고, 타겟팅 정확도를 높여 eCPM 효율을 개선했습니다."
      },
      {
        title: "4. 광고 노출 조건 판단 흐름",
        type: "diagram",
        content: JSON.stringify([
          { "box": "1. 빌드/지역 조건", "desc": "Biz 버전인가? (X)\n한국/일본인가? (X)\n(해당 시 광고 미노출)", "type": "process" },
          { "box": "2. 구독/구매 상태", "desc": "유료 구독자인가? (X)\n스캐너 구매자인가? (X)\n(구매자는 광고 미노출)", "type": "process" },
          { "box": "3. 빈도 제한 (Cap)", "desc": "'N일간 보지 않기' 설정 확인\n기간 내 Dismiss 했으면 통과", "type": "process" },
          { "box": "✅ 최종 결정", "desc": "모든 미노출 조건 통과 시\n광고 요청 및 표시 시작", "type": "solution" }
        ])
      },
      {
        title: "5. 미디에이션 워터폴 (Waterfall) 흐름",
        type: "diagram",
        content: JSON.stringify([
          { "box": "1. AdMob 요청", "desc": "Google 네트워크 직접 호출\n(가장 높은 eCPM 우선 순위)", "type": "source" },
          { "box": "2. Yandex Ads", "desc": "Fallback: AdMob 실패 시\nYandex 네트워크 자동 전환", "type": "process" },
          { "box": "3. 최종 Fallback", "desc": "네트워크 광고 모두 실패 시\n서버 기반 자체 광고 표시", "type": "solution" }
        ])
      }
    ],
    detailedTechStack: [
      { category: "Language", skills: ["Java", "Kotlin"] },
      { category: "Ad SDKs", skills: ["Google Admob", "Yandex", "IronSource", "Pangle", "AppLovin"] },
      { category: "Mediation", skills: ["AdMob Mediation (Waterfall/Bidding)"] },
      { category: "Compliance", skills: ["UMP SDK (GDPR)", "CCPA"] },
      { category: "Config", skills: ["Firebase Remote Config"] },
      { category: "Async", skills: ["CompletableFuture", "Handler", "Coroutine"] }
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
      { title: "CarAppService 기반 Android Auto 앱 구현", desc: "Android Auto Car App Library를 사용하여 차량 디스플레이에서 OBD 데이터를 확인할 수 있는 앱을 구현했습니다. CarAppService를 상속한 CarService 클래스에서 세션과 화면 생명주기를 관리하고, HostValidator를 통해 신뢰할 수 있는 호스트만 연결을 허용하도록 보안을 적용했습니다." },
      { title: "다중 Screen 구조 설계", desc: "Android Auto의 Template 제약 내에서 최적의 사용자 경험을 제공하기 위해 용도별 Screen을 분리했습니다. ConnectionScreen은 OBD 연결 상태와 차량 정보를 표시하고, DashboardScreen은 페이지 선택을, StandardDataScreen은 실시간 게이지 데이터를 표시합니다. 각 Screen은 싱글톤으로 관리되어 상태가 유지됩니다." },
      { title: "휴대폰-차량 디스플레이 간 실시간 동기화", desc: "휴대폰 앱에서 수신한 OBD 데이터가 Android Auto 화면에 즉시 반영되도록 동기화 시스템을 구현했습니다. DataBridge를 통해 전역 상태를 공유하고, Handler 기반 메시지 시스템으로 UI 업데이트를 트리거합니다. 1초 쓰로틀링을 적용하여 과도한 화면 갱신으로 인한 깜빡임을 방지했습니다." },
      { title: "표준/제조사 데이터 동적 전환", desc: "사용자가 표준 OBD2 데이터와 제조사 전용 데이터(MOBD) 사이를 자유롭게 전환할 수 있도록 구현했습니다. 데이터 모드 전환 시 기존 데이터를 초기화하고, 해당 모드에 맞는 스케줄과 프로토콜을 자동으로 재설정합니다. Android Auto 화면에서 전환해도 휴대폰 앱과 동기화됩니다." },
      { title: "Foreground Service 기반 안정적 백그라운드 실행", desc: "운전 중 앱이 백그라운드로 전환되어도 OBD 데이터 수신이 중단되지 않도록 Foreground Service를 적용했습니다. 위치 권한 상태에 따라 적절한 Service Type을 설정하고, 앱 종료 시에도 서비스가 유지되도록 stopWithTask='false'를 적용했습니다." }
    ],
    technicalDetails: [
      {
        title: "1. 주요 파일 구조",
        type: "code",
        content: `AndroidAuto/
  ├── CarService.java                    # CarAppService 구현체 (진입점)
  ├── AndroidAutoMainScreen.java         # 메인 화면 (ListTemplate)
  ├── AndroidAutoClickListener.java      # 클릭 이벤트 처리
  ├── EmptyScreen.java                   # 경고/안내 화면
  │
  ├── ConnectionScreen/
  │   └── ConnectionScreen.java          # ECU/OBD 연결 상태 표시
  │
  ├── DashBoardScreen/
  │   ├── DashboardScreen.java           # 대시보드 페이지 선택
  │   └── StandardDataScreen.java        # 실시간 데이터 표시
  │
  └── Demo/
      ├── AndroidAutoDemoManager.java    # 데모 모드 관리
      └── DemoDataSet.java               # 시뮬레이션 데이터 생성

  DataManager/DataBridge/
  ├── Status_DataBridge.java             # 전역 상태 (CarContext 포함)
  ├── State_DataBridge.java              # 연결 상태 플래그
  └── DataUpdate.java                    # UI 업데이트 트리거

  MOBD_Data/
  └── ExtendedConnectionManager.java     # 스케줄 및 모드 전환 관리`
      },
      {
        title: "2. Android Auto 아키텍처",
        type: "diagram",
        content: JSON.stringify([
          { "box": "CarService (CarAppService)", "desc": "• onCreateSession() → Session 생성\n• HostValidator → 보안 검증\n• Foreground Service 관리", "type": "source" },
          { "box": "Screen Layer", "desc": "Main → ConnectionScreen (연결 상태)\n↓\nDashboardScreen (선택)\n↓\nStandardDataScreen (실시간 데이터)", "type": "process" },
          { "box": "Data Sync (Bridge)", "desc": "Status_DataBridge ↔ UI Handler\n실시간 OBD 데이터 중계 및 상태 공유", "type": "process" },
          { "box": "Schedule Management", "desc": "ExtendedConnectionManager\n표준/제조사 데이터 모드 관리 및 스케줄링", "type": "solution" }
        ])
      },
      {
        title: "3. 안정성 확보 및 트러블 슈팅 (Stability & Troubleshooting)",
        type: "text",
        content: ":::1. UI 플리커링(깜빡임) 방지:::\n문제: OBD 데이터가 100ms 단위로 수신될 때마다 화면 갱신을 요청하여, 차량 디스플레이에서 심한 깜빡임과 CPU 과부하가 발생했습니다.\n해결: `StandardDataScreen`에 1초 단위의 쓰로틀링(Throttling) 로직을 적용하여, 마지막 갱신 이후 1초가 지나지 않았으면 요청을 무시하도록 최적화했습니다.\n효과: 화면 깜빡임을 제거하고 안정적인 프레임을 확보했습니다.\n\n:::2. 메모리 누수 방지:::\n문제: 잦은 연결/해제 반복 시 싱글톤 인스턴스와 핸들러가 해제되지 않아 메모리 점유율이 증가했습니다.\n해결: `onDestroy()`에서 `bleManager.disconnect()` 호출 및 Handler 콜백 제거(removeCallbacksAndMessages)를 명시적으로 수행했습니다."
      },
      {
        title: "4. 데이터 동기화 흐름",
        type: "diagram",
        content: JSON.stringify([
          { "box": "1. OBD 스캐너", "desc": "Bluetooth 통신\n데이터 수신", "type": "source" },
          { "box": "2. 휴대폰 앱 (Phone)", "desc": "DataUpdate.updateDashBoard()\nExecutorService로 데이터 파싱", "type": "process" },
          { "box": "3. Shared Memory", "desc": "StandardDataScreen Map에 Put\n(스레드 안전 처리)", "type": "process" },
          { "box": "4. Android Auto UI", "desc": "Handler.sendMessage() → refreshUI()\n(1초 쓰로틀링 적용하여 깜빡임 방지)", "type": "solution" }
        ])
      },
      {
        title: "5. 표준/제조사 데이터 전환 흐름",
        type: "diagram",
        content: JSON.stringify([
          { "box": "1. 사용자 요청", "desc": "화면에서 모드 전환 버튼 클릭\n(표준 ↔ 제조사)", "type": "source" },
          { "box": "2. CarService", "desc": "changeStandardSchedule() 호출\n현재 모드 확인 및 플래그 변경", "type": "process" },
          { "box": "3. Schedule Manager", "desc": "기존 스케줄 중단 및 데이터 초기화\n새 모드에 맞는 스케줄 재설정", "type": "solution" }
        ])
      }
    ],
    detailedTechStack: [
      { category: "Language", skills: ["Kotlin", "Java"] },
      { category: "Platform", skills: ["Android Auto (Car App Library)"] },
      { category: "Communication", skills: ["BroadcastReceiver", "Service", "Handler"] },
      { category: "State Mgmt", skills: ["LiveData", "Singleton"] }
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