//check related score if below threshold then only go cross agency
var relatedscore = 300;

//cross agency for each projects
var GcrossProjectsId_UEN = "9755532,5993205,6996379,7536554,7840075,2420438,7754177,7743111,1435700,5961169,5394492,3955825,6514178,4240090,6663571,5208757,8876894,1202472,8839010,8182123,5876404,4141339,5424009,7691827,8609744,8353540,1166588,9429434,8766034,8739681,3143978,2569527";
var GcrossProjectsId_ACRA = "9755532,8551743,5993205,6996379,7536554,7840075,2420438,7754177,7743111,1435700,5961169,5394492,3955825,6514178,4240090,6663571,5208757,8876894,1202472,8839010,8182123,5876404,4141339,7691827,8609744,8353540,1166588,9429434,8766034,8739681,3143978,2569527";
var GcrossProjectsId_AGD = "9755532,8551743,5993205,6996379,7536554,7840075,2420438,7754177,7743111,1435700,5394492,3955825,6514178,4240090,6663571,5208757,8876894,1202472,8839010,8182123,5876404,4141339,5424009,7691827,8609744,8353540,1166588,9429434,8766034,8739681,3143978,2569527";
var GcrossProjectsId_AVA = "9755532,7754177,8551743,5993205,6996379,7536554,7840075,2420438,7743111,1435700,5961169,5394492,3955825,6514178,4240090,6663571,5208757,8876894,1202472,8839010,8182123,4141339,5424009,7691827,8609744,5876404,8353540,1166588,9429434,8766034,3143978,2569527";
var GcrossProjectsId_CEA = "9755532,8551743,5993205,6996379,7536554,7840075,2420438,7754177,7743111,1435700,5961169,5394492,3955825,6514178,4240090,6663571,5208757,8876894,1202472,8182123,5876404,4141339,5424009,7691827,8609744,8353540,1166588,9429434,8766034,8739681,3143978,2569527";
var GcrossProjectsId_Corppass = "7743111,9755532,8551743,5993205,6996379,7536554,7840075,2420438,7754177,1435700,5961169,3955825,6514178,4240090,6663571,5208757,8876894,1202472,8839010,8182123,5876404,4141339,5424009,7691827,8609744,8353540,1166588,9429434,8766034,8739681,3143978,2569527";
var GcrossProjectsId_Customs = "9755532,7840075,5392886,9429434,8551743,5993205,6996379,7536554,2420438,7754177,7743111,1435700,5961169,5394492,3955825,6514178,4240090,6663571,5208757,8876894,1202472,8839010,8182123,5876404,4141339,5424009,7691827,8609744,8353540,8766034,8739681,3143978,2569527";
var GcrossProjectsId_GeBIZ = "9755532,8551743,5993205,6996379,7536554,7840075,2420438,7754177,7743111,1435700,5961169,5394492,3955825,6514178,4240090,6663571,8876894,1202472,8839010,8182123,5876404,4141339,5424009,7691827,8609744,8353540,1166588,9429434,8766034,8739681,3143978,2569527";
var GcrossProjectsId_GovTech = "9755532,8551743,5993205,6996379,7536554,7840075,2420438,7754177,7743111,1435700,5961169,5394492,3955825,4240090,6663571,5208757,8876894,1202472,8839010,8182123,5876404,4141339,5424009,7691827,8609744,8353540,1166588,9429434,8766034,8739681,3143978,2569527";
var GcrossProjectsId_ICA = "9755532,5392886,9429434,8551743,5993205,6996379,7536554,2420438,7754177,7743111,1435700,5961169,5394492,3955825,6514178,4240090,6663571,5208757,8876894,1202472,8839010,8182123,5876404,4141339,5424009,7691827,8609744,8353540,1166588,8766034,8739681,3143978,2569527";
var GcrossProjectsId_IE = "9755532,8551743,5993205,6996379,7536554,7840075,2420438,7754177,7743111,5961169,5394492,3955825,6514178,4240090,6663571,5208757,8876894,1202472,8839010,8182123,5876404,4141339,5424009,7691827,8609744,8353540,1166588,9429434,8766034,8739681,3143978,2569527";
var GcrossProjectsId_IMDA = "9755532,8182123,7536554,5993205,7743111,7840075,2420438,8551743,6996379,7754177,1435700,5961169,5394492,6514178,4240090,6663571,5208757,8876894,1202472,8839010,5876404,4141339,5424009,7691827,8609744,8353540,1166588,9429434,8766034,8739681,3143978,2569527";
var GcrossProjectsId_INLIS = "9755532,8551743,5993205,6996379,7536554,7840075,2420438,7754177,7743111,1435700,5961169,5394492,3955825,6514178,4240090,6663571,5208757,8876894,8839010,8182123,5876404,4141339,5424009,7691827,8609744,8353540,1166588,9429434,8766034,8739681,3143978,2569527";
var GcrossProjectsId_IIT = "7691827,4141339,2569527,3143978,9755532,7743111,5424009,7536554,8551743,5993205,6996379,7840075,2420438,7754177,1435700,5394492,5961169,3955825,6514178,4240090,6663571,5208757,8876894,1202472,8839010,5876404,8609744,8353540,1166588,9429434,8766034,8739681";
var GcrossProjectsId_PTSD = "8182123,7691827,3143978,2569527,9755532,8551743,5993205,6996379,7536554,7840075,2420438,7754177,7743111,1435700,5394492,5961169,3955825,6514178,4240090,6663571,5208757,8876894,1202472,8839010,5876404,5424009,8609744,8353540,1166588,9429434,8766034,8739681";
var GcrossProjectsId_EPES = "8182123,4141339,3143978,2569527,9755532,8551743,5993205,6996379,7536554,7840075,2420438,7754177,7743111,1435700,5394492,5961169,3955825,6514178,4240090,6663571,5208757,8876894,1202472,8839010,5876404,5424009,8609744,8353540,1166588,9429434,8766034,8739681";
var GcrossProjectsId_GST = "8182123,4141339,7691827,2569527,9755532,8551743,5993205,6996379,7536554,7840075,2420438,7754177,7743111,1435700,5394492,5961169,3955825,6514178,4240090,6663571,5208757,8876894,1202472,8839010,5876404,5424009,8609744,8353540,1166588,9429434,8766034,8739681";
var GcrossProjectsId_CT = "8182123,4141339,7691827,3143978,9755532,8551743,5993205,6996379,7536554,7840075,2420438,7754177,7743111,1435700,5394492,5961169,3955825,6514178,4240090,6663571,5208757,8876894,1202472,8839010,5876404,5424009,8609744,8353540,1166588,9429434,8766034,8739681";
var GcrossProjectsId_LTA = "9755532";
var GcrossProjectsId_MFA = "7840075,9755532,8551743,5993205,6996379,7536554,7840075,2420438,7754177,7743111,1435700,1202472,5961169,5394492,3955825,6514178,4240090,6663571,5208757,8839010,8182123,5876404,4141339,5424009,7691827,8609744,8353540,1166588,9429434,8766034,8739681,3143978,2569527";
var GcrossProjectsId_MHA = "9755532,7840075,9429434,8551743,5993205,6996379,7536554,2420438,7754177,7743111,1435700,5961169,5394492,3955825,6514178,4240090,6663571,5208757,8876894,1202472,8839010,8182123,5876404,4141339,5424009,7691827,8609744,8353540,1166588,8766034,8739681,3143978,2569527";
var GcrossProjectsId_MINDEF = "9755532,8551743,5993205,6996379,7536554,7840075,2420438,7754177,7743111,1435700,5961169,5394492,3955825,6514178,4240090,6663571,5208757,8876894,1202472,8839010,8182123,5876404,4141339,5424009,7691827,8609744,8353540,1166588,9429434,8766034,8739681,3143978,2569527";
var GcrossProjectsId_MOE = "9755532,8551743,6996379,7536554,7840075,2420438,7754177,7743111,1435700,5961169,5394492,3955825,6514178,4240090,6663571,5208757,8876894,1202472,8839010,8182123,5876404,4141339,5424009,7691827,8609744,8353540,1166588,9429434,8766034,8739681,3143978,2569527";
var GcrossProjectsId_MOH = "9755532,8551743,5993205,6996379,7536554,7840075,2420438,7754177,7743111,1435700,5961169,5394492,3955825,6514178,6663571,5208757,8876894,1202472,8839010,8182123,5876404,4141339,5424009,7691827,8609744,8353540,1166588,9429434,8766034,8739681,3143978,2569527";
var GcrossProjectsId_MOL = "9755532,8551743,5993205,6996379,7536554,7840075,2420438,7754177,7743111,1435700,5961169,5394492,3955825,6514178,4240090,6663571,5208757,8876894,1202472,8839010,8182123,5876404,4141339,5424009,7691827,8609744,8353540,1166588,9429434,8739681,3143978,2569527";
var GcrossProjectsId_MSF = "9755532,8551743,5993205,6996379,7840075,2420438,7754177,7743111,1435700,5961169,5394492,3955825,6514178,4240090,6663571,5208757,8876894,1202472,8839010,8182123,5876404,4141339,5424009,7691827,8609744,8353540,1166588,9429434,8766034,8739681,3143978,2569527";
var GcrossProjectsId_MSO = "9755532,8551743,5993205,7536554,7840075,2420438,7754177,7743111,1435700,5961169,5394492,3955825,6514178,4240090,6663571,5208757,8876894,1202472,8839010,8182123,5876404,4141339,5424009,7691827,8609744,8353540,1166588,9429434,8766034,8739681,3143978,2569527";
var GcrossProjectsId_NEA = "9755532,6996379,8739681,8353540,1166588,4240090,5876404,7743111,7840075,4143868,5208757,8551743,1202472,8766034,8839010,5993205,7536554,2420438,1435700,5961169,5394492,3955825,6514178,6663571,8876894,8182123,4141339,5424009,7691827,8609744,9429434,3143978,2569527";
var GcrossProjectsId_PDPC = "9755532,3955825,8551743,5993205,6996379,7536554,7840075,7754177,7743111,1435700,5961169,5394492,6514178,4240090,6663571,5208757,8876894,1202472,8839010,8182123,5876404,4141339,5424009,7691827,8609744,8353540,1166588,9429434,8766034,8739681,3143978,2569527";
var GcrossProjectsId_SCDF = "9755532,8551743,5993205,6996379,7536554,7840075,2420438,7754177,7743111,1435700,5961169,5394492,3955825,6514178,4240090,6663571,5208757,8876894,1202472,5876404,8839010,8182123,4141339,5424009,7691827,8609744,1166588,9429434,8766034,8739681,3143978,2569527";
var GcrossProjectsId_SCORE = "9755532,7840075,5392886,8551743,5993205,6996379,7536554,2420438,7754177,7743111,1435700,5961169,5394492,3955825,6514178,4240090,6663571,5208757,8876894,1202472,8839010,8182123,5876404,4141339,5424009,7691827,8609744,8353540,9429434,8766034,8739681,3143978,2569527";
var GcrossProjectsId_SingPass = "5394492,9755532,8551743,5993205,6996379,7536554,7840075,2420438,7754177,1435700,5961169,3955825,6514178,4240090,6663571,5208757,8876894,1202472,8839010,8182123,5876404,4141339,5424009,7691827,8609744,8353540,1166588,9429434,8766034,8739681,3143978,2569527";
var GcrossProjectsId_SingStat = "9755532,8551743,5993205,6996379,7536554,7840075,2420438,7754177,7743111,1435700,5961169,5394492,3955825,6514178,4240090,5208757,8876894,1202472,8839010,8182123,5876404,4141339,5424009,7691827,8609744,8353540,1166588,9429434,8766034,8739681,3143978,2569527";
var GcrossProjectsId_SLA = "9755532,8551743,5993205,6996379,7536554,7840075,2420438,7754177,7743111,1435700,5961169,5394492,3955825,6514178,4240090,6663571,5208757,8876894,8839010,8182123,5876404,4141339,5424009,7691827,8609744,8353540,1166588,9429434,8766034,8739681,3143978,2569527";
var GcrossProjectsId_SNDGO = "9755532,8551743,5993205,6996379,7536554,7840075,2420438,7754177,7743111,1435700,5961169,5394492,3955825,6514178,4240090,6663571,5208757,8876894,1202472,8839010,8182123,5876404,4141339,5424009,7691827,8353540,1166588,9429434,8766034,8739681,3143978,2569527";
var GcrossProjectsId_SPF = "9755532";
var GcrossProjectsId_StateCourts = "9755532,8551743,5993205,6996379,7536554,7840075,2420438,7754177,7743111,1435700,5961169,5394492,3955825,6514178,4240090,6663571,5208757,8876894,1202472,8839010,8182123,4141339,5424009,7691827,8609744,8353540,1166588,9429434,8766034,8739681,3143978,2569527";
var GcrossProjectsId_BCA = "9755532";
var GcrossProjectsId_PUB = "9755532";
var GcrossProjectsId_URA = "9755532";
var GcrossProjectsId_ITE = "9755532";
var GcrossProjectsId_SPS = "9755532";
var GcrossProjectsId_BGP = "9755532";
var GcrossProjectsId_NParks = "9755532";
var GcrossProjectsId_ELD = "9755532";
var GcrossProjectsId_SSG = "9755532,5993205,8551743,6996379,7536554,7840075,2420438,7754177,7743111,1435700,5961169,5394492,3955825,6514178,4240090,6663571,5208757,8876894,1202472,8839010,8182123,4141339,5424009,7691827,8609744,8353540,1166588,9429434,8766034,8739681,3143978,2569527";
var GcrossProjectsId_CRA = "9755532";
var GcrossProjectsId_CP = "9755532";
var GcrossProjectsId_SCB = "9755532";
var GcrossProjectsId_SEAB = "9755532,5993205,8551743,6996379,7536554,7840075,2420438,7754177,7743111,1435700,5961169,5394492,3955825,6514178,4240090,6663571,5208757,8876894,1202472,8839010,8182123,4141339,5424009,7691827,8609744,8353540,1166588,9429434,8766034,8739681,3143978,2569527";
var GcrossProjectsId_PTC = "9755532";
var GcrossProjectsId_MOM = "9755532";
var GcrossProjectsId_MTI = "9755532";
var GcrossProjectsId_ROMM = "9755532";
var GcrossProjectsId_SYC = "9755532";
var GcrossProjectsId_NYC = "9755532";

//extended cross agency
var GcrossProjectsIdifaqs = "7875909,9732988";

//cross agency settings
var GcrossProjectName;
var GcrossProjectId;
function crossproject(CPId){
	switch (CPId) {
	case "9755532":
		GcrossProjectName = "Central";
		GcrossProjectId = CPId
		break;
	case "8551743":
		GcrossProjectName = "UEN";
		GcrossProjectId = CPId
		break;
	case "5993205":
		GcrossProjectName = "MOE";
		GcrossProjectId = CPId
		break;
	case "1202472":
		GcrossProjectName = "SLA";
		GcrossProjectId = CPId
		break;
	case "6996379":
		GcrossProjectName = "MSO";
		GcrossProjectId = CPId
		break;
	case "2420438":
		GcrossProjectName = "PDPC";
		GcrossProjectId = CPId
		break;
	case "7754177":
		GcrossProjectName = "NEA";
		GcrossProjectId = CPId
		break;
	case "7536554":
		GcrossProjectName = "MSF";
		GcrossProjectId = CPId
		break;
	case "7743111":
		GcrossProjectName = "SingPass";
		GcrossProjectId = CPId
		break;
	case "1435700":
		GcrossProjectName = "IE";
		GcrossProjectId = CPId
		break;
	case "5394492":
		GcrossProjectName = "CorpPass";
		GcrossProjectId = CPId
		break;
	case "3955825":
		GcrossProjectName = "IMDA";
		GcrossProjectId = CPId
		break;
	case "6514178":
		GcrossProjectName = "GovTech";
		GcrossProjectId = CPId
		break;
	case "5961169":
		GcrossProjectName = "AGD";
		GcrossProjectId = CPId
		break;
	case "5208757":
		GcrossProjectName = "GeBIZ";
		GcrossProjectId = CPId
		break;
	case "4240090":
		GcrossProjectName = "MOH";
		GcrossProjectId = CPId
		break;
	case "8766034":
		GcrossProjectName = "The Ministry of Law";
		GcrossProjectId = CPId
		break;
	case "7606241":
		GcrossProjectName = "SSG";
		GcrossProjectId = CPId
		break;
	case "5392886":
		GcrossProjectName = "MHA";
		GcrossProjectId = CPId
		break;
	case "9429434":
		GcrossProjectName = "SCORE";
		GcrossProjectId = CPId
		break;
	case "8739681":
		GcrossProjectName = "AVA";
		GcrossProjectId = CPId
		break;
	case "7840075":
		GcrossProjectName = "ICA";
		GcrossProjectId = CPId
		break;
	case "3143978":
		GcrossProjectName = "IRAS GST";
		GcrossProjectId = CPId
		break;
	case "4354715":
		GcrossProjectName = "MINDEF";
		GcrossProjectId = CPId
		break;
	case "8609744":
		GcrossProjectName = "SNDGO";
		GcrossProjectId = CPId
		break;
	case "4851960":
		GcrossProjectName = "SPF";
		GcrossProjectId = CPId
		break;
	case "7691827":
		GcrossProjectName = "IRAS EPES";
		GcrossProjectId = CPId
		break;
	case "1166588":
		GcrossProjectName = "Singapore Customs";
		GcrossProjectId = CPId
		break;
	case "8353540":
		GcrossProjectName = "SCDF";
		GcrossProjectId = CPId
		break;
	case "5424009":
		GcrossProjectName = "ACRA";
		GcrossProjectId = CPId
		break;
	case "4141339":
		GcrossProjectName = "IRAS PTSD";
		GcrossProjectId = CPId
		break;
	case "5050715":
		GcrossProjectName = "LTA";
		GcrossProjectId = CPId
		break;
	case "5876404":
		GcrossProjectName = "State Courts";
		GcrossProjectId = CPId
		break;
	case "8182123":
		GcrossProjectName = "IRAS IIT";
		GcrossProjectId = CPId
		break;
	case "8839010":
		GcrossProjectName = "CEA";
		GcrossProjectId = CPId
		break;
	case "8876894":
		GcrossProjectName = "MFA";
		GcrossProjectId = CPId
		break;
	case "6663571":
		GcrossProjectName = "SingStat";
		GcrossProjectId = CPId
		break;
	case "4143868":
		GcrossProjectName = "BCA";
		GcrossProjectId = CPId
		break;
	case "7535484":
		GcrossProjectName = "ITE";
		GcrossProjectId = CPId
		break;
	case "4425507":
		GcrossProjectName = "SPS";
		GcrossProjectId = CPId
		break;
	case "2386722":
		GcrossProjectName = "BGP";
		GcrossProjectId = CPId
		break;
	case "9836096":
		GcrossProjectName = "NParks";
		GcrossProjectId = CPId
		break;
	case "2569527":
		GcrossProjectName = "IRAS CT";
		GcrossProjectId = CPId
		break;
	case "7798684":
		GcrossProjectName = "ELD";
		GcrossProjectId = CPId
		break;
	case "6911172":
		GcrossProjectName = "CRA";
		GcrossProjectId = CPId
		break;
	case "6075076":
		GcrossProjectName = "Charity Portal";
		GcrossProjectId = CPId
		break;
	case "8721617":
		GcrossProjectName = "SCB";
		GcrossProjectId = CPId
		break;
	case "8919207":
		GcrossProjectName = "SEAB";
		GcrossProjectId = CPId
		break;
	case "8919207":
		GcrossProjectName = "MOM";
		GcrossProjectId = CPId
		break;
	case "6181502":
		GcrossProjectName = "MTI";
		GcrossProjectId = CPId
		break;
	case "9899396":
		GcrossProjectName = "ROMM";
		GcrossProjectId = CPId
		break;
	case "3548713":
		GcrossProjectName = "SYC";
		GcrossProjectId = CPId
		break;
	case "4030872":
		GcrossProjectName = "NYC";
		GcrossProjectId = CPId
		break;

		}
	
	}
	

//cross agency settings for IE
var IEGcrossProjectName;
var IEGcrossProjectId;
function IEcrossproject(getprodid){
	if (getprodid.indexOf('9755532') > -1) {
		IEGcrossProjectName = "Central";
		IEGcrossProjectId = "9755532";

	}
	else if (getprodid.indexOf('8551743') > -1) {
		IEGcrossProjectName = "UEN";
		IEGcrossProjectId = "8551743";

	}
	else if (getprodid.indexOf('5993205') > -1) {
		IEGcrossProjectName = "MOE";
		IEGcrossProjectId = "5993205";

	}
	else if (getprodid.indexOf('1202472') > -1) {
		IEGcrossProjectName = "SLA";
		IEGcrossProjectId = "1202472";

	}
	else if (getprodid.indexOf('6996379') > -1) {
		IEGcrossProjectName = "MSO";
		IEGcrossProjectId = "6996379";

	}
	else if (getprodid.indexOf('2420438') > -1) {
		IEGcrossProjectName = "PDPC";
		IEGcrossProjectId = "2420438";

	}
	else if (getprodid.indexOf('7754177') > -1) {
		IEGcrossProjectName = "NEA";
		IEGcrossProjectId = "7754177";

	}
	else if (getprodid.indexOf('7536554') > -1) {
		IEGcrossProjectName = "MSF";
		IEGcrossProjectId = "7536554";

	}
	else if (getprodid.indexOf('7743111') > -1) {
		IEGcrossProjectName = "SingPass";
		IEGcrossProjectId = "7743111";

	}
	else if (getprodid.indexOf('1435700') > -1) {
		IEGcrossProjectName = "IE";
		IEGcrossProjectId = "1435700";

	}
	else if (getprodid.indexOf('5394492') > -1) {
		IEGcrossProjectName = "CorpPass";
		IEGcrossProjectId = "5394492";

	}
	else if (getprodid.indexOf('3955825') > -1) {
		IEGcrossProjectName = "IMDA";
		IEGcrossProjectId = "3955825";

	}
	else if (getprodid.indexOf('6514178') > -1) {
		IEGcrossProjectName = "GovTech";
		IEGcrossProjectId = "6514178";

	}
	else if (getprodid.indexOf('5961169') > -1) {
		IEGcrossProjectName = "AGD";
		IEGcrossProjectId = "5961169";

	}
	else if (getprodid.indexOf('5208757') > -1) {
		IEGcrossProjectName = "GeBIZ";
		IEGcrossProjectId = "5208757";

	}
	else if (getprodid.indexOf('4240090') > -1) {
		IEGcrossProjectName = "MOH";
		IEGcrossProjectId = "4240090";

	}
	else if (getprodid.indexOf('8766034') > -1) {
		IEGcrossProjectName = "The Ministry of Law";
		IEGcrossProjectId = "8766034";

	}
	else if (getprodid.indexOf('7606241') > -1) {
		IEGcrossProjectName = "SSG";
		IEGcrossProjectId = "7606241";

	}
	else if (getprodid.indexOf('5392886') > -1) {
		IEGcrossProjectName = "MHA";
		IEGcrossProjectId = "5392886";

	}
	else if (getprodid.indexOf('9429434') > -1) {
		IEGcrossProjectName = "SCORE";
		IEGcrossProjectId = "9429434";

	}
	else if (getprodid.indexOf('8739681') > -1) {
		IEGcrossProjectName = "AVA";
		IEGcrossProjectId = "8739681";

	}
	else if (getprodid.indexOf('7840075') > -1) {
		IEGcrossProjectName = "ICA";
		IEGcrossProjectId = "7840075";

	}
	else if (getprodid.indexOf('3143978') > -1) {
		IEGcrossProjectName = "IRAS GST";
		IEGcrossProjectId = "3143978";

	}
	else if (getprodid.indexOf('4354715') > -1) {
		IEGcrossProjectName = "MINDEF";
		IEGcrossProjectId = "4354715";

	}
	else if (getprodid.indexOf('8609744') > -1) {
		IEGcrossProjectName = "SNDGO";
		IEGcrossProjectId = "8609744";

	}
	else if (getprodid.indexOf('4851960') > -1) {
		IEGcrossProjectName = "SPF";
		IEGcrossProjectId = "4851960";

	}
	else if (getprodid.indexOf('7691827') > -1) {
		IEGcrossProjectName = "IRAS EPES";
		IEGcrossProjectId = "7691827";

	}
	else if (getprodid.indexOf('1166588') > -1) {
		IEGcrossProjectName = "Singapore Customs";
		IEGcrossProjectId = "1166588";

	}
	else if (getprodid.indexOf('8353540') > -1) {
		IEGcrossProjectName = "SCDF";
		IEGcrossProjectId = "8353540";

	}
	else if (getprodid.indexOf('5424009') > -1) {
		IEGcrossProjectName = "ACRA";
		IEGcrossProjectId = "5424009";

	}
	else if (getprodid.indexOf('4141339') > -1) {
		IEGcrossProjectName = "IRAS PTSD";
		IEGcrossProjectId = "4141339";

	}
	else if (getprodid.indexOf('5050715') > -1) {
		IEGcrossProjectName = "LTA";
		IEGcrossProjectId = "5050715";

	}
	else if (getprodid.indexOf('5876404') > -1) {
		IEGcrossProjectName = "State Courts";
		IEGcrossProjectId = "5876404";

	}
	else if (getprodid.indexOf('8182123') > -1) {
		IEGcrossProjectName = "IRAS IIT";
		IEGcrossProjectId = "8182123";

	}
	else if (getprodid.indexOf('8839010') > -1) {
		IEGcrossProjectName = "CEA";
		IEGcrossProjectId = "8839010";

	}
	else if (getprodid.indexOf('8876894') > -1) {
		IEGcrossProjectName = "MFA";
		IEGcrossProjectId = "8876894";

	}
	else if (getprodid.indexOf('6663571') > -1) {
		IEGcrossProjectName = "SingStat";
		IEGcrossProjectId = "6663571";

	}
	else if (getprodid.indexOf('4143868') > -1) {
		IEGcrossProjectName = "BCA";
		IEGcrossProjectId = "4143868";

	}
	else if (getprodid.indexOf('7535484') > -1) {
		IEGcrossProjectName = "ITE";
		IEGcrossProjectId = "7535484";

	}
	else if (getprodid.indexOf('4425507') > -1) {
		IEGcrossProjectName = "SPS";
		IEGcrossProjectId = "4425507";

	}
	else if (getprodid.indexOf('2386722') > -1) {
		IEGcrossProjectName = "BGP";
		IEGcrossProjectId = "2386722";

	}
	else if (getprodid.indexOf('9836096') > -1) {
		IEGcrossProjectName = "NParks";
		IEGcrossProjectId = "9836096";

	}
	else if (getprodid.indexOf('2569527') > -1) {
		IEGcrossProjectName = "IRAS CT";
		IEGcrossProjectId = "2569527";

	}
	else if (getprodid.indexOf('7798684') > -1) {
		IEGcrossProjectName = "ELD";
		IEGcrossProjectId = "7798684";

	}
	else if (getprodid.indexOf('6911172') > -1) {
		IEGcrossProjectName = "CRA";
		IEGcrossProjectId = "6911172";

	}
	else if (getprodid.indexOf('6075076') > -1) {
		IEGcrossProjectName = "Charity Portal";
		IEGcrossProjectId = "6075076";

	}
	else if (getprodid.indexOf('8721617') > -1) {
		IEGcrossProjectName = "SCB";
		IEGcrossProjectId = "8721617";

	}
	else if (getprodid.indexOf('8919207') > -1) {
		IEGcrossProjectName = "SEAB";
		IEGcrossProjectId = "8919207";

	}
	else if (getprodid.indexOf('1196147') > -1) {
		IEGcrossProjectName = "MOM";
		IEGcrossProjectId = "1196147";

	}
	else if (getprodid.indexOf('6181502') > -1) {
		IEGcrossProjectName = "MTI";
		IEGcrossProjectId = "6181502";

	}
	else if (getprodid.indexOf('9899396') > -1) {
		IEGcrossProjectName = "ROMM";
		IEGcrossProjectId = "9899396";

	}
	else if (getprodid.indexOf('3548713') > -1) {
		IEGcrossProjectName = "SYC";
		IEGcrossProjectId = "3548713";

	}
	else if (getprodid.indexOf('4030872') > -1) {
		IEGcrossProjectName = "NYC";
		IEGcrossProjectId = "4030872";

	}
	
	
}