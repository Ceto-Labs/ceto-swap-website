export const idlFactory = ({ IDL }) => {
  const Result_2 = IDL.Variant({ ok: IDL.Bool, err: IDL.Text })
  const Time = IDL.Int
  const PairMetaData = IDL.Record({
    TVL: IDL.Nat,
    Reserve0: IDL.Nat,
    Reserve1: IDL.Nat,
    Reward: IDL.Nat,
    RecordTime: Time,
    TotalLiquidity: IDL.Nat
  })
  const PairUserTokens = IDL.Record({
    Token0Num: IDL.Nat,
    Token1Num: IDL.Nat,
    Liquidity: IDL.Nat
  })
  const Result_1 = IDL.Variant({
    ok: IDL.Tuple(IDL.Opt(PairMetaData), IDL.Opt(PairUserTokens)),
    err: IDL.Text
  })
  const TokenInfo = IDL.Record({
    fee: IDL.Nat,
    decimals: IDL.Nat64,
    token: IDL.Principal,
    deployTime: Time,
    owner: IDL.Principal,
    icon: IDL.Opt(IDL.Vec(IDL.Nat8)),
    name: IDL.Text,
    totalSupply: IDL.Nat,
    cycles: IDL.Nat,
    userNumber: IDL.Nat,
    symbol: IDL.Text
  })
  const Tokens = IDL.Record({ token0: TokenInfo, token1: TokenInfo })
  const PairInfo = IDL.Record({
    TVL: IDL.Nat,
    Reserve0: IDL.Nat,
    Reserve1: IDL.Nat,
    Reward: IDL.Nat,
    PairCID: IDL.Principal,
    APR1Year: IDL.Nat,
    Tokens: Tokens,
    APR7Day: IDL.Nat,
    APR1Month: IDL.Nat
  })
  const Result = IDL.Variant({ ok: PairUserTokens, err: IDL.Text })
  const Storage = IDL.Service({
    addMailSub: IDL.Func([IDL.Text], [Result_2], []),
    addPair: IDL.Func([IDL.Principal, IDL.Principal, IDL.Principal], [], []),
    cycle: IDL.Func([], [IDL.Nat], []),
    deposit: IDL.Func([], [], []),
    getAllDataOfPair: IDL.Func([IDL.Principal, IDL.Principal], [Result_1], ['query']),
    getMailList: IDL.Func([], [IDL.Vec(IDL.Text), IDL.Nat], []),
    getPairList: IDL.Func([], [IDL.Vec(PairInfo)], []),
    getPairMetaData: IDL.Func([IDL.Principal], [IDL.Opt(PairMetaData)], ['query']),
    getTokenList: IDL.Func([], [IDL.Vec(TokenInfo)], ['query']),
    getUserDataOfPair: IDL.Func([IDL.Principal, IDL.Principal], [Result], ['query']),
    getUsersAndTokensOfPair: IDL.Func(
      [IDL.Principal],
      [IDL.Opt(IDL.Vec(IDL.Tuple(IDL.Principal, PairUserTokens)))],
      ['query']
    ),
    resetMailList: IDL.Func([], [IDL.Bool], []),
    updatePairMetaData: IDL.Func([IDL.Nat, IDL.Nat, IDL.Nat, IDL.Nat, IDL.Nat], [], []),
    updatePairUserTokens: IDL.Func([IDL.Principal, IDL.Int, IDL.Int, IDL.Int], [], ['oneway']),
    updateTokenInfo: IDL.Func([], [], []),
    wallet_receive: IDL.Func([], [IDL.Nat], [])
  })
  return Storage
}
export const init = ({ IDL }) => {
  return []
}
