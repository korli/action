import {Hypervisor, Kind as HypervisorKind} from '../../hypervisor'
import {OperatingSystem} from '../../operating_system'
import {factory, Factory as BaseFactory} from '../factory'
import Haiku from './haiku'

@factory
//@ts-ignore
class HaikuFactory extends BaseFactory {
  override get defaultHypervisor(): Hypervisor {
    return this.architecture.defaultHypervisor
  }

  override create(version: string, hypervisor: Hypervisor): OperatingSystem {
    return new Haiku(this.architecture, version, hypervisor)
  }

  override validateHypervisor(kind: HypervisorKind): void {
    this.architecture.validateHypervisor(kind)
  }
}
