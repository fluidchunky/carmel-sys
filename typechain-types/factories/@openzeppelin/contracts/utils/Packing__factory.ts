/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../../common";
import type {
  Packing,
  PackingInterface,
} from "../../../../@openzeppelin/contracts/utils/Packing";

const _abi = [
  {
    inputs: [],
    name: "OutOfRangeAccess",
    type: "error",
  },
] as const;

const _bytecode =
  "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220d43a8aaca2766cd578c7770b237c16cc6b9dad70c4d3f6a793dc836893fe930a64736f6c634300081c0033";

type PackingConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PackingConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Packing__factory extends ContractFactory {
  constructor(...args: PackingConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      Packing & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): Packing__factory {
    return super.connect(runner) as Packing__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PackingInterface {
    return new Interface(_abi) as PackingInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): Packing {
    return new Contract(address, _abi, runner) as unknown as Packing;
  }
}
