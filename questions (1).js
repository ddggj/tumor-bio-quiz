const questions = [
  {
    question: `有關威爾姆氏瘤(Wilmstumor)之敘述,下列何者錯誤?`,
    A: `好發於中年男性`,
    B: `與WT1基因有關`,
    C: `內含胚質(blastema)、上皮及間質成份`,
    D: `也稱為腎胚細胞瘤(nephroblastoma)`,
    answer: `A`
  },
  {
    question: `類固醇(steroid)荷爾蒙接受器一般位於:`,
    A: `細胞核`,
    B: `細胞膜`,
    C: `粒線體`,
    D: `內質網`,
    answer: `A`
  },
  {
    question: `下列有關p53基因的敘述,何者錯誤?`,
    A: `為腫瘤抑制基因(tumor suppressor gene)`,
    B: `是人類癌症中最常發生突變的基因`,
    C: `p53基因突變會促進細胞凋亡(apoptosis)`,
    D: `p53基因突變後會促進細胞增生(proliferation)`,
    answer: `C`
  },
  {
    question: `下列有關N-MYC基因之敘述,何者錯誤?`,
    A: `可以均質染色區(Homogenous staining region)或 雙微體(double minutes)的方式造成基因放大(gene amplification)`,
    B: `屬於一種位於細胞核的轉錄因子,為致癌基因 (oncogene)`,
    C: `常於神經母細胞瘤(neuroblastoma)出現基因放大 (gene amplication)`,
    D: `常於伯基特氏淋巴瘤(Burkitt lymphoma)出現基因轉位`,
    answer: `D`
  },
  {
    question: `下列有關p16/INK4a基因之敘述,何者錯誤?`,
    A: `約20% 家族性黑色素瘤(melanoma)病人具有此基因之突變`,
    B: `屬於抑制細胞週期進行之腫瘤抑制基因(tumor suppressor gene)`,
    C: `此基因可因甲基化(methylation)而失去功能`,
    D: `此基因突變異常能減少RB蛋白之磷酸化`,
    answer: `D`
  },
  {
    question: `下列有關細胞週期調節因子之敘述,何者錯誤?`,
    A: `cyclin D/CDK4複合體之活性,在G1早期受p16/INK4a所抑制`,
    B: `p27為人類癌症最常發生突變之腫瘤抑制基因`,
    C: `p21為p53基因之下游之腫瘤抑制基因`,
    D: `cyclin E之表現量在G1 S期達到高峰`,
    answer: `B`
  },
  {
    question: `經由內在途徑(intrinsic pathway)引起細胞凋亡(apoptosis)的蛋白質,由下列何者所釋出?`,
    A: `細胞核(nucleus)`,
    B: `凋亡小體(apoptotic body)`,
    C: `粒線體(mitochondria)`,
    D: `溶酶體(lysosome)`,
    answer: `C`
  },
  {
    question: `下列有關癌症傾向(cancer predisposing)症候群或 疾病之敘述,何者錯誤?`,
    A: `RB腫瘤抑制基因之先天性突變之遺傳模式為體染色體顯性(autosomal dominant)`,
    B: `Li-Fraumeni症候群是p53腫瘤抑制基因之先天性突變造成`,
    C: `Li-Fraumeni症候群其遺傳模式為體染色體顯性 (autosomal dominant)`,
    D: `乳癌有關之BRCA1與BRCA2家族性基因突變,其遺傳模式為體染色體隱性(autosomal recessive)`,
    answer: `D`
  },
  {
    question: `肝臟代謝藥物的反應可分為第一相(phasel)及第二相(phase II)。有關藥物代謝的敘述,下列何者正確?`,
    A: `藥物皆須經過第一相及第二相的代謝反應才能排出體外`,
    B: `藥物的代謝皆須依序先經第一相反應,再經第二相反應`,
    C: `細胞色素(cytochrome) P450 酵素系統參與第一相 代謝反應`,
    D: `水解作用(hydrolysis)及結合作用(conjugation) 屬於第一相代謝反應`,
    answer: `C`
  },
  {
    question: `下列有關染色體端粒(telomere)與端粒酶 (telomerase)的敘述,何者正確?`,
    A: `端粒酶在癌細胞通常不活化`,
    B: `端粒在體細胞不存在`,
    C: `端粒酶在生殖細胞(germ cell)的活性低`,
    D: `端粒酶是RNA-蛋白質構成之複合體`,
    answer: `D`
  },
  {
    question: `喪失p53和R之功能,以及PI3K路徑過度活化,對於下列何種腫瘤的發生最為重要?`,
    A: `腦室管膜瘤(ependymoma)`,
    B: `神經膠質母細胞瘤(glioblastoma)`,
    C: `腦膜瘤(meningioma)`,
    D: `寡樹突神經膠細胞瘤(oligodendroglioma)`,
    answer: `B`
  },
  {
    question: `在自由基的去除過程中,以下何種酵素最有可能將氫氧 自由基(hydroxyl radical)轉變為水?`,
    A: `超氧化物歧化酶(superoxide dismutase)`,
    B: `觸酶(catalase)`,
    C: `穀胱甘肽過氧化物酶(glutathione peroxidase)`,
    D: `一氧化氮合成酶(nitric oxide synthase)`,
    answer: `C`
  },
  {
    question: `下列有關肺腺癌基因突變的敘述何者錯誤?`,
    A: `與receptor tyrosine kinase突變有關的有EGFR、ALK ROS1 MET RET`,
    B: `臺灣肺腺癌最常見的是EGFR突變`,
    C: `西方國家肺腺癌最常突變的基因是EGFR`,
    D: `BRAF及KRAS也是與肺腺癌有關的致癌基因突變`,
    answer: `C`
  },
  {
    question: `化學致癌物質「黃麴毒素」(aflatoxin B)源自被徽 菌污染之穀類,與下列那一種癌症發生最相關?`,
    A: `肝細胞癌`,
    B: `胃癌`,
    C: `大腸癌`,
    D: `肺癌`,
    answer: `A`
  },
  {
    question: `下列有關Wilms氏腫瘤(Wilms tumor)的敘述,何者錯誤?`,
    A: `是2歲到5歲兒童腎臟最常見之原發性腫瘤`,
    B: `若干先天性畸形,如生殖器異常、性腺形成不良、腎臟異常等,此腫瘤發生機會不會增加`,
    C: `腫瘤與發育中的腎臟(nephrogenesis)在顯微鏡檢下有若干相似處`,
    D: `與癌症抑制基因WT1突變有關`,
    answer: `B`
  },
  {
    question: `強化化學物致癌有關的促進劑何者錯誤?`,
    A: `促進劑會改變細胞的基因`,
    B: `促進劑會促使起始細胞發生不正常的增生`,
    C: `促進劑造成之改變是可逆的`,
    D: `正常細胞只接觸促進劑的作用不會致癌`,
    answer: `A`
  },
  {
    question: `下列那一種蛋白質具有抑制細胞凋亡(apoptosis)之功能?`,
    A: `Bak`,
    B: `Bax`,
    C: `Bcl-2`,
    D: `FASL`,
    answer: `C`
  },
  {
    question: `下列何種類型的大腸直腸癌與 microsatellite instability關係最密切?`,
    A: `Familial adenomatous polyposis`,
    B: `Hereditary nonpolyposis colorectal cancer`,
    C: `Familial polyp`,
    D: `Gardner syndrome`,
    answer: `B`
  },
  {
    question: `下列何種CYP2C9基因型會使病人的warfarin的適用劑量最低?`,
    A: `CYP2C9*1 (第一型)`,
    B: `CYP2C9*2 (第二型)`,
    C: `CYP2C9*3 (第三型)`,
    D: `CYP2C9*4 (第四型)`,
    answer: `C`
  },
  {
    question: `某一癌症病人的血液與腫瘤組織的DNA以PCR放大一個 microsatellite repeat locus的片段。其PCR 產物經由 DNA sequencer分析後的結果如圖示:此病人的腫瘤DNA可能具有下列何種特性?`,
    A: `Gene mutation`,
    B: `Chromosome duplication`,
    C: `Microsatellite instability`,
    D: `Loss of heterozygosity`,
    answer: `C`
  },
  {
    question: `某一癌症病人的血液與腫瘤組織的DNA以PCR放大一個 microsatellite repeat locus的片段。其PCR 產物經由 DNA sequencer分析後的結果如圖示:承上題,該病人可能有下列那一個基因的缺失而導致上述的現象?`,
    A: `APC`,
    B: `MSH2`,
    C: `Bcl-2`,
    D: `RB`,
    answer: `B`
  },
  {
    question: `下列關於乳癌相關基因檢測的敘述,何者錯誤?`,
    A: `ER陽性的病人適合用tamoxifen來治療`,
    B: `HER2過度表現的病人適合用tratuzumab來治療`,
    C: `檢測HER2表現量常用的方法包括免疫組織染色及原位螢光雜交`,
    D: `CYP2D6基因多型性的檢測可協助評估tratuzumab的療效`,
    answer: `D`
  },
  {
    question: `下列何者是肺腺癌,常見的基因突變?`,
    A: `EGFR`,
    B: `BCR-ABL`,
    C: `RAF`,
    D: `PDGFR`,
    answer: `A`
  },
  {
    question: `下列何者是肺腺癌:承上題,下列何者是該基因常見的突變區域?`,
    A: `Exon 1`,
    B: `Exon 9`,
    C: `Exon11`,
    D: `Exon19`,
    answer: `D`
  },
  {
    question: `下列何種基因:常在黑色素瘤(Melanoma)發生突變?`,
    A: `B-RAF`,
    B: `MAPK`,
    C: `EGFR`,
    D: `BRCA1`,
    answer: `A`
  },
  {
    question: `下列何種基因:承上題,下列何者是該基因在melanoma主要發生突變的位點?`,
    A: `Exon 12`,
    B: `Exon 15`,
    C: `Exon 21`,
    D: `Exon 25`,
    answer: `B`
  },
  {
    question: `下列何種分子的檢驗:可以協助腸胃基質癌(GIST)的診斷?`,
    A: `c-KIT`,
    B: `c-MYC`,
    C: `RAS`,
    D: `c-SRC`,
    answer: `A`
  },
  {
    question: `下列何種分子的檢驗:承上題,若經由該種分子檢驗確診為GIST,可使用下列何種標靶治療的藥物?`,
    A: `Tratuzumab`,
    B: `Tamoxifen`,
    C: `Gleevec`,
    D: `Retinoic acid`,
    answer: `C`
  },
  {
    question: `真核生物的染色體構造不包含下列何種分子?`,
    A: `DNA`,
    B: `Histone`,
    C: `Histone修飾因子(Modifier)`,
    D: `Centriole`,
    answer: `D`
  },
  {
    question: `下列何種細胞功能的缺失最容易引發微衛星不穩定性 (Microsatellite instability) ?`,
    A: `DNA重組機制(DNA recombination)`,
    B: `DNA錯誤配對修復機制(DNA mismatch repair)`,
    C: `DNA複製機制(DNA replication)`,
    D: `細胞分裂機制(Cell division)`,
    answer: `B`
  },
  {
    question: `目前台灣肺癌標靶療法主要的作用標的:下列何種基因的過度表現或突變是?`,
    A: `PDGFR`,
    B: `EGFR`,
    C: `EGF`,
    D: `PDGF`,
    answer: `B`
  },
  {
    question: `目前台灣肺癌標靶療法主要的作用標的:承上題,下列何種分子檢驗方法適合用來分析該基因是否在腫瘤組織中有過度表現的情形?(1)IHC (2) Quantitative real-time PCR (3) SSCP (4) FISH`,
    A: `123`,
    B: `234`,
    C: `134`,
    D: `124`,
    answer: `D`
  },
  {
    question: `下列有關TP53分子檢驗的敘述,何者錯誤?`,
    A: `TP53基因突變的分子檢測可以協助診斷是否患有 Li-Fraumeni syndrome`,
    B: `TP53基因突變的分子檢測主要著重在exon 4~9`,
    C: `SSCP與定序兩種方法皆可以用在檢測TP53是否有突變`,
    D: `有TP53突變的腫瘤組織其IHC染色的訊號一般比正常的組織弱`,
    answer: `D`
  },
  {
    question: `下列關於細胞色素(Cytochrome)P450的敘述,何者錯誤？`,
    A: `負責細胞內50%以上的藥物代謝`,
    B: `其基因具很高的多型性`,
    C: `其酵素有時會造成藥物強烈毒性副作用`,
    D: `共約含5至6個酵素`,
    answer: `D`
  },
  {
    question: `下列何種癌症的細胞最常發生microsatellite instability?`,
    A: `Hepatoma`,
    B: `Pancreatic cancer`,
    C: `Colorectal cancer`,
    D: `Cervical cancer`,
    answer: `C`
  },
  {
    question: `Tamoxifen主要用來治療下列何種疾病?`,
    A: `肝癌`,
    B: `胃癌`,
    C: `動脈硬化`,
    D: `乳癌`,
    answer: `D`
  },
  {
    question: `雙股斷裂之DNA受損,可用下列何種修復系統修復?`,
    A: `Photoreactivation`,
    B: `Base excision repair`,
    C: `Non-homologous end joining`,
    D: `Translesion synthesis`,
    answer: `C`
  },
  {
    question: `抑癌基因 BRCA2 會與 Rad51 protein結合,參與下列 何種DNA受損的修復?`,
    A: `Pyrimidine dimers`,
    B: `Damaged base`,
    C: `Transversion`,
    D: `Double-strand break`,
    answer: `D`
  },
  {
    question: `下列何種蛋白質不是DNA錯誤配對修復(Mismatch repair)機轉的重要因子?`,
    A: `MLH1`,
    B: `MSH2`,
    C: `FAH1`,
    D: `PMS2`,
    answer: `C`
  },
  {
    question: `下列何種分子的檢驗呈陽性時,適合以tamoxifen做為乳癌治療的策略?`,
    A: `HER2`,
    B: `ER`,
    C: `BRCA1`,
    D: `ErbB3`,
    answer: `B`
  },
  {
    question: `下列有關大腸癌microsatellite instability(MSI)的敘述,何者正確?`,
    A: `腫瘤病患有MSI的現象一般預後比較不好`,
    B: `為mismatch repair 基因的突變導致`,
    C: `Familial adenomatous polyposis的病人常有MSI的現象`,
    D: `Protein truncation test是常用來做為初步篩選病患腫瘤是否有MSI現象的檢驗方法`,
    answer: `B`
  },
  {
    question: `遺傳性非息肉性大腸直腸癌群症(Hereditary nonpolyposis colorectal cancer)常伴隨下列何種基因變 異的顯性遺傳所導致?`,
    A: `APC`,
    B: `Mismatch repair genes`,
    C: `β-catenin`,
    D: `TP53`,
    answer: `B`
  },
  {
    question: `真核生物的染色體構造不包含下列何者?`,
    A: `Centromere`,
    B: `Telomere`,
    C: `Mitochondria`,
    D: `Heterochromatin`,
    answer: `C`
  },
  {
    question: `下列何者是檢測TP53基因突變主要的標的?`,
    A: `Exon 1-3`,
    B: `Exon 4-9`,
    C: `Exon 10-13`,
    D: `Exon 13-16`,
    answer: `B`
  },
  {
    question: `關於warfarin藥物的使用,下列敘述何者錯誤?`,
    A: `Warfarin服用劑量過量時易引起心肌梗塞`,
    B: `適用劑量與VKORC1基因多型性有關`,
    C: `Warfarin常用於治療心臟瓣膜置換手術後病人`,
    D: `Warfarin適用劑量會受到病人是否同時服用其他藥物而被影響`,
    answer: `A`
  },
  {
    question: `DNA受損時,細胞內有許多酵素修復系統,下列何種系統修復後最容易出錯(Error-prone)?`,
    A: `Photoreactivation`,
    B: `Base excision repair`,
    C: `Translesion synthesis`,
    D: `Nucleotide excision repair`,
    answer: `C`
  },
  {
    question: `微衛星不穩定性(Microsatellite instability)的檢測最可輔助下列何種疾病的分類?`,
    A: `Lung cancer`,
    B: `Colorectal cancer`,
    C: `Breast cancer`,
    D: `Brain tumor`,
    answer: `B`
  },
  {
    question: `下列何種基因的突變與家族性乳癌的發生有最密切的關係?`,
    A: `APC`,
    B: `DCC`,
    C: `MAD2`,
    D: `BRCA1`,
    answer: `D`
  },
  {
    question: `肺癌中KRAS基因變異和下列何種原癌基因過度表達常同時發生且有協同作用?`,
    A: `c-myc`,
    B: `l-myc`,
    C: `n-myc`,
    D: `TP53`,
    answer: `A`
  },
  {
    question: `Cyclin E-CDK2是調控細胞週期中的那一期?`,
    A: `G1中期`,
    B: `G1晚期`,
    C: `S期`,
    D: `G2/M 期`,
    answer: `B`
  },
  {
    question: `EGFR基因變異是肺癌標靶藥物艾瑞莎之治療標的,下列那個exon的deletion是臺灣地區最常見的EGFR基因 變 異之一?`,
    A: `18`,
    B: `19`,
    C: `20`,
    D: `21`,
    answer: `B`
  },
  {
    question: `以艾瑞莎標靶藥物治療肺腺癌,常因下列何種EGFR基因變異而效果不佳?`,
    A: `L858R`,
    B: `G719X`,
    C: `T790M`,
    D: `L861Q`,
    answer: `C`
  },
  {
    question: `下列何種基因與細胞凋亡有最直接的關係?`,
    A: `KRAS`,
    B: `MYC`,
    C: `Bcl-2`,
    D: `EGFR`,
    answer: `C`
  },
  {
    question: `造成口腔癌之相關基因中,下列何者是常見的抑癌基因突變?`,
    A: `TP53`,
    B: `EGFR`,
    C: `VGFR`,
    D: `ERBB`,
    answer: `A`
  },
  {
    question: `乳癌患者可以接受賀爾蒙療法或單株抗體標靶療法,但三陰性的乳癌病患(triple negative breast cancer,TNBC)無法接受這些治療且預後較差。所謂「三陰性」的 標記不包含下列何者?`,
    A: `Estrogen receptor (ER)`,
    B: `HER2`,
    C: `BRCA1`,
    D: `Progesterone receptor (PgR)`,
    answer: `C`
  },
  {
    question: `下列何種基因變異的分子檢驗最適合用於篩檢乳癌病人家族成員是乳癌高危險族群與否?`,
    A: `TP53基因`,
    B: `BRCA1基因`,
    C: `KRAS基因`,
    D: `MET基因`,
    answer: `B`
  },
  {
    question: `全世界第一個發展出之標靶藥物imatinib,是針對下列何者癌症?`,
    A: `AML`,
    B: `CML`,
    C: `MDS`,
    D: `Multiple myeloma`,
    answer: `B`
  },
  {
    question: `關於BRCA1在乳癌細胞的突變之敘述,下列何者錯誤?`,
    A: `常造成不完整的蛋白質產物,導致該蛋白質失去正常的功能`,
    B: `突變的位置都集中在某1~2個核苷酸的位置`,
    C: `突變常發生在蛋白質轉譯的區域`,
    D: `該基因的突變也會在不具家族史的病患發生`,
    answer: `B`
  },
  {
    question: `下列何種蛋白會與E2F結合而控制細胞週期的限制點 (restriction point) ?`,
    A: `P53`,
    B: `RB`,
    C: `RAS`,
    D: `EGFR`,
    answer: `B`
  },
  {
    question: `下列何種基因的變異會造成乳癌病人對tamoxifen治療產生抗藥性?`,
    A: `TP53`,
    B: `PTEN`,
    C: `PI3K`,
    D: `KRAS`,
    answer: `A`
  },
  {
    question: `有一病患經大腸鏡檢查後,發現有腸道病變的可能,經家族史調查後,發現家族中有四位患有大腸癌,其中兩人為一等親且發病年齡都在50歲以下,患者與其中一位患病的家族成員為父姪輩的關係。綜合以上資訊,可初步推斷該名病患可能有下列何種疾病?`,
    A: `家族性腺性瘜肉群症`,
    B: `遺傳性非瘜肉性大腸直腸癌群症`,
    C: `慢性潰瘍性結腸炎`,
    D: `偶發性大腸直腸症候群`,
    answer: `B`
  },
  {
    question: `承上題,上述遺傳性非瘜肉性大腸直腸癌群症病患最有可能在下列何種分子檢驗中有異常的現象?`,
    A: `以protein truncation test檢測APC基因的突變`,
    B: `以pyrosequencing檢測mismatch repair基因的序列`,
    C: `以dHPLC檢測BRCA2基因的突變`,
    D: `以DNA定序檢測PDGFR的序列`,
    answer: `B`
  },
  {
    question: `CYP2C9之基因多型性決定病患代謝Warfarin藥物的速率,針對CYP2C9基因多型性的敘述,下列何者正確?`,
    A: `CYP2C9第二型變異型是第417個胺基酸由Glycine突變成Cysteine`,
    B: `CYP2C9第三型變異型是第417個胺基酸由Arginine突變成Leucine`,
    C: `相對於第一型與第三型變異型,第二型變異型同合子的個體適用Warfarin藥物的劑量最高`,
    D: `相對於第一型與第二型變異型,第三型變異型同合子的個體適用Warfarin藥物的劑量最低`,
    answer: `D`
  },
  {
    question: `Tamoxifen廣泛使用於乳癌術後病人,以降低癌症復發,但Tamoxifen在體內的代謝會依個人代謝藥物基因多型性的不同,而造成藥物治療效果有所差異,下列敘述何者錯誤?`,
    A: `Tamoxifen作用原理為抑制estrogen結合於動情激素受體`,
    B: `Tamoxifen在體內,經CYP3A4及CYP2D6酵素作用後,療效較差`,
    C: `Tamoxifen歸類為內分泌治療(endocrine therapy)`,
    D: `會使代謝酵素活性變低之CYP2D6基因多型性,將導致Tamoxifen療效不佳`,
    answer: `B`
  },
];