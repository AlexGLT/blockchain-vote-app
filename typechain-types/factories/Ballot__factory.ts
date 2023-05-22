/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BytesLike,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { Ballot, BallotInterface } from "../Ballot";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes32[]",
        name: "proposalNames",
        type: "bytes32[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "chairperson",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "delegate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getAllProposals",
    outputs: [
      {
        components: [
          {
            internalType: "bytes32",
            name: "name",
            type: "bytes32",
          },
          {
            internalType: "uint256",
            name: "voteCount",
            type: "uint256",
          },
        ],
        internalType: "struct Ballot.Proposal[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "voter",
        type: "address",
      },
    ],
    name: "giveRightToVote",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "proposals",
    outputs: [
      {
        internalType: "bytes32",
        name: "name",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "voteCount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "proposal",
        type: "uint256",
      },
    ],
    name: "vote",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "voters",
    outputs: [
      {
        internalType: "uint256",
        name: "weight",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "voted",
        type: "bool",
      },
      {
        internalType: "address",
        name: "delegate",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "vote",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "winnerName",
    outputs: [
      {
        internalType: "bytes32",
        name: "winnerName_",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "winningProposal",
    outputs: [
      {
        internalType: "uint256",
        name: "winningProposal_",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040516200177f3803806200177f833981810160405281019062000037919062000342565b336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060018060008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000018190555060005b81518110156200017657600260405180604001604052808484815181106200010f576200010e62000393565b5b60200260200101518152602001600081525090806001815401808255809150506001900390600052602060002090600202016000909190919091506000820151816000015560208201518160010155505080806200016d90620003fb565b915050620000e2565b505062000448565b6000604051905090565b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b620001e28262000197565b810181811067ffffffffffffffff82111715620002045762000203620001a8565b5b80604052505050565b6000620002196200017e565b9050620002278282620001d7565b919050565b600067ffffffffffffffff8211156200024a5762000249620001a8565b5b602082029050602081019050919050565b600080fd5b6000819050919050565b620002758162000260565b81146200028157600080fd5b50565b60008151905062000295816200026a565b92915050565b6000620002b2620002ac846200022c565b6200020d565b90508083825260208201905060208402830185811115620002d857620002d76200025b565b5b835b81811015620003055780620002f0888262000284565b845260208401935050602081019050620002da565b5050509392505050565b600082601f83011262000327576200032662000192565b5b8151620003398482602086016200029b565b91505092915050565b6000602082840312156200035b576200035a62000188565b5b600082015167ffffffffffffffff8111156200037c576200037b6200018d565b5b6200038a848285016200030f565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000819050919050565b60006200040882620003f1565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036200043d576200043c620003c2565b5b600182019050919050565b61132780620004586000396000f3fe608060405234801561001057600080fd5b50600436106100935760003560e01c8063609ff1bd11610066578063609ff1bd1461011f5780639e7b8d611461013d578063a3ec138d14610159578063cceb68f51461018c578063e2ba53f0146101aa57610093565b80630121b93f14610098578063013cf08b146100b45780632e4176cf146100e55780635c19a95c14610103575b600080fd5b6100b260048036038101906100ad9190610b6a565b6101c8565b005b6100ce60048036038101906100c99190610b6a565b61030e565b6040516100dc929190610bbf565b60405180910390f35b6100ed610342565b6040516100fa9190610c29565b60405180910390f35b61011d60048036038101906101189190610c70565b610366565b005b610127610759565b6040516101349190610c9d565b60405180910390f35b61015760048036038101906101529190610c70565b6107e1565b005b610173600480360381019061016e9190610c70565b610998565b6040516101839493929190610cd3565b60405180910390f35b6101946109f5565b6040516101a19190610e14565b60405180910390f35b6101b2610ade565b6040516101bf9190610e36565b60405180910390f35b6000600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002090506000816000015403610252576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161024990610eae565b60405180910390fd5b8060010160009054906101000a900460ff16156102a4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161029b90610f1a565b60405180910390fd5b60018160010160006101000a81548160ff0219169083151502179055508181600201819055508060000154600283815481106102e3576102e2610f3a565b5b906000526020600020906002020160010160008282546103039190610f98565b925050819055505050565b6002818154811061031e57600080fd5b90600052602060002090600202016000915090508060000154908060010154905082565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020905060008160000154036103f0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103e790611018565b60405180910390fd5b8060010160009054906101000a900460ff1615610442576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161043990611084565b60405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036104b0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104a7906110f0565b60405180910390fd5b5b600073ffffffffffffffffffffffffffffffffffffffff16600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161461061f57600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1691503373ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160361061a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106119061115c565b60405180910390fd5b6104b1565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020905060018160000154101561067457600080fd5b60018260010160006101000a81548160ff021916908315150217905550828260010160016101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508060010160009054906101000a900460ff1615610734578160000154600282600201548154811061070857610707610f3a565b5b906000526020600020906002020160010160008282546107289190610f98565b92505081905550610754565b816000015481600001600082825461074c9190610f98565b925050819055505b505050565b6000806000905060005b6002805490508110156107dc57816002828154811061078557610784610f3a565b5b90600052602060002090600202016001015411156107c957600281815481106107b1576107b0610f3a565b5b90600052602060002090600202016001015491508092505b80806107d49061117c565b915050610763565b505090565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461086f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161086690611236565b60405180910390fd5b600160008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160009054906101000a900460ff16156108ff576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108f6906112a2565b60405180910390fd5b6000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001541461094e57600080fd5b60018060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000018190555050565b60016020528060005260406000206000915090508060000154908060010160009054906101000a900460ff16908060010160019054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060020154905084565b6060600060028054905067ffffffffffffffff811115610a1857610a176112c2565b5b604051908082528060200260200182016040528015610a5157816020015b610a3e610b12565b815260200190600190039081610a365790505b50905060005b600280549050811015610ad65760028181548110610a7857610a77610f3a565b5b906000526020600020906002020160405180604001604052908160008201548152602001600182015481525050828281518110610ab857610ab7610f3a565b5b60200260200101819052508080610ace9061117c565b915050610a57565b508091505090565b60006002610aea610759565b81548110610afb57610afa610f3a565b5b906000526020600020906002020160000154905090565b604051806040016040528060008019168152602001600081525090565b600080fd5b6000819050919050565b610b4781610b34565b8114610b5257600080fd5b50565b600081359050610b6481610b3e565b92915050565b600060208284031215610b8057610b7f610b2f565b5b6000610b8e84828501610b55565b91505092915050565b6000819050919050565b610baa81610b97565b82525050565b610bb981610b34565b82525050565b6000604082019050610bd46000830185610ba1565b610be16020830184610bb0565b9392505050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610c1382610be8565b9050919050565b610c2381610c08565b82525050565b6000602082019050610c3e6000830184610c1a565b92915050565b610c4d81610c08565b8114610c5857600080fd5b50565b600081359050610c6a81610c44565b92915050565b600060208284031215610c8657610c85610b2f565b5b6000610c9484828501610c5b565b91505092915050565b6000602082019050610cb26000830184610bb0565b92915050565b60008115159050919050565b610ccd81610cb8565b82525050565b6000608082019050610ce86000830187610bb0565b610cf56020830186610cc4565b610d026040830185610c1a565b610d0f6060830184610bb0565b95945050505050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b610d4d81610b97565b82525050565b610d5c81610b34565b82525050565b604082016000820151610d786000850182610d44565b506020820151610d8b6020850182610d53565b50505050565b6000610d9d8383610d62565b60408301905092915050565b6000602082019050919050565b6000610dc182610d18565b610dcb8185610d23565b9350610dd683610d34565b8060005b83811015610e07578151610dee8882610d91565b9750610df983610da9565b925050600181019050610dda565b5085935050505092915050565b60006020820190508181036000830152610e2e8184610db6565b905092915050565b6000602082019050610e4b6000830184610ba1565b92915050565b600082825260208201905092915050565b7f486173206e6f20726967687420746f20766f7465000000000000000000000000600082015250565b6000610e98601483610e51565b9150610ea382610e62565b602082019050919050565b60006020820190508181036000830152610ec781610e8b565b9050919050565b7f416c726561647920766f7465642e000000000000000000000000000000000000600082015250565b6000610f04600e83610e51565b9150610f0f82610ece565b602082019050919050565b60006020820190508181036000830152610f3381610ef7565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610fa382610b34565b9150610fae83610b34565b9250828201905080821115610fc657610fc5610f69565b5b92915050565b7f596f752068617665206e6f20726967687420746f20766f746500000000000000600082015250565b6000611002601983610e51565b915061100d82610fcc565b602082019050919050565b6000602082019050818103600083015261103181610ff5565b9050919050565b7f596f7520616c726561647920766f7465642e0000000000000000000000000000600082015250565b600061106e601283610e51565b915061107982611038565b602082019050919050565b6000602082019050818103600083015261109d81611061565b9050919050565b7f53656c662d64656c65676174696f6e20697320646973616c6c6f7765642e0000600082015250565b60006110da601e83610e51565b91506110e5826110a4565b602082019050919050565b60006020820190508181036000830152611109816110cd565b9050919050565b7f466f756e64206c6f6f7020696e2064656c65676174696f6e2e00000000000000600082015250565b6000611146601983610e51565b915061115182611110565b602082019050919050565b6000602082019050818103600083015261117581611139565b9050919050565b600061118782610b34565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036111b9576111b8610f69565b5b600182019050919050565b7f4f6e6c79206368616972706572736f6e2063616e20676976652072696768742060008201527f746f20766f74652e000000000000000000000000000000000000000000000000602082015250565b6000611220602883610e51565b915061122b826111c4565b604082019050919050565b6000602082019050818103600083015261124f81611213565b9050919050565b7f54686520766f74657220616c726561647920766f7465642e0000000000000000600082015250565b600061128c601883610e51565b915061129782611256565b602082019050919050565b600060208201905081810360008301526112bb8161127f565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fdfea26469706673582212203dca47570d0a0cd009886b244918679c620f4faff6b0f9e7ff7117623f5cb69164736f6c63430008120033";

type BallotConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BallotConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Ballot__factory extends ContractFactory {
  constructor(...args: BallotConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    proposalNames: PromiseOrValue<BytesLike>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Ballot> {
    return super.deploy(proposalNames, overrides || {}) as Promise<Ballot>;
  }
  override getDeployTransaction(
    proposalNames: PromiseOrValue<BytesLike>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(proposalNames, overrides || {});
  }
  override attach(address: string): Ballot {
    return super.attach(address) as Ballot;
  }
  override connect(signer: Signer): Ballot__factory {
    return super.connect(signer) as Ballot__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BallotInterface {
    return new utils.Interface(_abi) as BallotInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Ballot {
    return new Contract(address, _abi, signerOrProvider) as Ballot;
  }
}