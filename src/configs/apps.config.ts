export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "https://apitestscan.uniultra.xyz/api/v1"

export const TransactionTypes = [
	{
		name: "TYPES: ALL",
		value: ""
	}, {
		name: "CONTRACT CALL",
		value: "CONTRACTCALL"
	}, {
		name: "CONTRACT CREATE",
		value: "CONTRACTCREATEINSTANCE"
	}, {
		name: "CONTRACT DELETE",
		value: "CONTRACTDELETEINSTANCE"
	}, {
		name: "CONTRACT UPDATE",
		value: "CONTRACTUPDATEINSTANCE"
	}, {
		name: "CRYPTO ADD LIVE HASH",
		value: "CRYPTOADDLIVEHASH"
	}, {
		name: "CRYPTO APPROVE ALLOWANCE",
		value: "CRYPTOAPPROVEALLOWANCE"
	}, {
		name: "CRYPTO CREATE ACCOUNT",
		value: "CRYPTOCREATEACCOUNT"
	}, {
		name: "CRYPTO DELETE ACCOUNT",
		value: "CRYPTODELETE"
	}, {
		name: "CRYPTO DELETE ALLOWANCE",
		value: "CRYPTODELETEALLOWANCE"
	}, {
		name: "CRYPTO DELETE LIVE HASH",
		value: "CRYPTODELETELIVEHASH"
	}, {
		name: "CRYPTO TRANSFER",
		value: "CRYPTOTRANSFER"
	}, {
		name: "CRYPTO UPDATE ACCOUNT",
		value: "CRYPTOUPDATEACCOUNT"
	}, {
		name: "ETHEREUM TRANSACTION",
		value: "ETHEREUMTRANSACTION"
	}, {
		name: "FILE APPEND",
		value: "FILEAPPEND"
	}, {
		name: "FILE CREATE",
		value: "FILECREATE"
	}, {
		name: "FILE DELETE",
		value: "FILEDELETE"
	}, {
		name: "FILE UPDATE",
		value: "FILEUPDATE"
	}, {
		name: "FREEZE",
		value: "FREEZE"
	}, {
		name: "HCS CREATE TOPIC",
		value: "CONSENSUSCREATETOPIC"
	}, {
		name: "HCS DELETE TOPIC",
		value: "CONSENSUSDELETETOPIC"
	}, {
		name: "HCS SUBMIT MESSAGE",
		value: "CONSENSUSSUBMITMESSAGE"
	}, {
		name: "HCS UPDATE TOPIC",
		value: "CONSENSUSUPDATETOPIC"
	}, {
		name: "NODE STAKE UPDATE",
		value: "NODESTAKEUPDATE"
	}, {
		name: "PSEUDORANDOM NUMBER GENERATE",
		value: "UTILPRNG"
	}, {
		name: "SCHEDULE CREATE",
		value: "SCHEDULECREATE"
	}, {
		name: "SCHEDULE DELETE",
		value: "SCHEDULEDELETE"
	}, {
		name: "SCHEDULE SIGN",
		value: "SCHEDULESIGN"
	}, {
		name: "SYSTEM DELETE",
		value: "SYSTEMDELETE"
	}, {
		name: "SYSTEM UNDELETE",
		value: "SYSTEMUNDELETE"
	}, {
		name: "TOKEN ASSOCIATE",
		value: "TOKENASSOCIATE"
	}, {
		name: "TOKEN BURN",
		value: "TOKENBURN"
	}, {
		name: "TOKEN CREATE",
		value: "TOKENCREATION"
	}, {
		name: "TOKEN DELETE",
		value: "TOKENDELETION"
	}, {
		name: "TOKEN DISSOCIATE",
		value: "TOKENDISSOCIATE"
	}, {
		name: "TOKEN FEE SCHEDULE UPDATE",
		value: "TOKENFEESCHEDULEUPDATE"
	}, {
		name: "TOKEN FREEZE",
		value: "TOKENFREEZE"
	}, {
		name: "TOKEN KYC GRANT",
		value: "TOKENGRANTKYC"
	}, {
		name: "TOKEN KYC REVOKE",
		value: "TOKENREVOKEKYC"
	}, {
		name: "TOKEN MINT",
		value: "TOKENMINT"
	}, {
		name: "TOKEN PAUSE",
		value: "TOKENPAUSE"
	}, {
		name: "TOKEN UNFREEZE",
		value: "TOKENUNFREEZE"
	}, {
		name: "TOKEN UNPAUSE",
		value: "TOKENUNPAUSE"
	}, {
		name: "TOKEN UPDATE",
		value: "TOKENUPDATE"
	}, {
		name: "TOKEN WIPE",
		value: "TOKENWIPE"
	}, {
		name: "UNCHECKED SUBMIT",
		value: "UNCHECKEDSUBMIT"
	},
]

export const StakeTypes = [
	{
		value: 0,
		name: "0 - Hosted by LG | Seoul, South Korea - Rewarding (staked for reward is 33.2% of max)"
	},
	{
		value: 1,
		name: "1 - Hosted by Swirlds | North Carolina, USA - Rewarding (staked for reward is 59.7% of max)"
	},
	{
		value: 2,
		name: "2 - Hosted by FIS | Florida, USA - Rewarding (staked for reward is 26.5% of max)"
	},
	{
		value: 3,
		name: "3 - Hosted by Wipro | Mumbai, India - Rewarding (staked for reward is 1.6% of max)"
	},
	{
		value: 4,
		name: "4 - Hosted by Nomura | Tokyo, Japan - Rewarding (staked for reward is 2.3% of max)"
	},
	{
		value: 5,
		name: "5 - Hosted by Google | Helsinki, Finland - Rewarding (staked for reward is 58.2% of max)"
	},
	{
		value: 6,
		name: "6 - Hosted by Zain Group | Kuwait City, Kuwait - Rewarding (staked for reward is 0.6% of max)"
	},
	{
		value: 7,
		name: "7 - Hosted by Magalu | São Paulo, Brazil - Rewarding (staked for reward is 26.9% of max)"
	},
	{
		value: 8,
		name: "8 - Hosted by Boeing | Toronto, Canada - Rewarding (staked for reward is 5.4% of max)"
	},
	{
		value: 9,
		name: "9 - Hosted by DLA Piper | London, UK - Rewarding (staked for reward is 6.8% of max)"
	},
	{
		value: 10,
		name: "10 - Hosted by Tata Communications | California, USA - Rewarding (staked for reward is 2.9% of max)"
	},
	{
		value: 11,
		name: "11 - Hosted by IBM | Washington, USA - Rewarding (staked for reward is 6.9% of max)"
	},
	{
		value: 12,
		name: "12 - Hosted by Deutsche Telekom | Berlin, Germany - Rewarding (staked for reward is 2.2% of max)"
	},
	{
		value: 13,
		name: "13 - Hosted by UCL | London, UK - Rewarding (staked for reward is 1.1% of max)"
	},
	{
		value: 14,
		name: "14 - Hosted by Avery Dennison | Pennsylvania, USA - Rewarding (staked for reward is 9.5% of max)"
	},
	{
		value: 15,
		name: "15 - Hosted for Dentons | Frankfurt, DE - Rewarding (staked for reward is 14.6% of max)"
	},
	{
		value: 16,
		name: "16 - Hosted for Standard Bank | Warsaw, Poland - Rewarding (staked for reward is 6.1% of max)"
	},
	{
		value: 17,
		name: "17 - Hosted by eftpos | Sydney, Australia - Rewarding (staked for reward is 4% of max)"
	},
	{
		value: 18,
		name: "18 - Hosted by EDF | Paris, France - Rewarding (staked for reward is 8.9% of max)"
	},
	{
		value: 19,
		name: "19 - Hosted for Shinhan Bank | Seoul, South Korea - Rewarding (staked for reward is 0.9% of max)"
	},
	{
		value: 20,
		name: "20 - Hosted for Chainlink Labs | Michigan, USA - Rewarding (staked for reward is 19.7% of max)"
	},
	{
		value: 21,
		name: "21 - Hosted for LSE | Virginia, USA - Rewarding (staked for reward is 1.4% of max)"
	},
	{
		value: 22,
		name: "22 - Hosted for IIT Madras | Georgia, USA - Rewarding (staked for reward is 1% of max)"
	},
	{
		value: 23,
		name: "23 - Hosted for DBS | Singapore, Republic of Singapore - Rewarding (staked for reward is 4% of max)"
	},
	{
		value: 24,
		name: "24 - Hosted by ServiceNow | Ogden, Utah - Rewarding (staked for reward is 3.4% of max)"
	},
	{
		value: 25,
		name: "25 - Hosted for Ubisoft | Singapore, Republic of Singapore - Rewarding (staked for reward is 3.2% of max)"
	},
	{
		value: 26,
		name: "26 - Hosted for abrdn | Madrid, Spain - Rewarding (staked for reward is 0.5% of max)"
	},
	{
		value: 27,
		name: "27 - Hosted for Dell | New Jersey, USA - Rewarding (staked for reward is 0.7% of max)"
	},

]