import {Vm} from '../../xhyve_vm'

export class XhyveVm extends Vm {
  override get command(): string[] {
    // prettier-ignore
    return super.command.concat(
      '-f', `haiku,${this.configuration.userboot},${this.configuration.diskImage},`
    )
  }

  protected get networkDevice(): string {
    return 'virtio-net'
  }

  override async setupWorkDirectory(
    homeDirectory: string,
    workDirectory: string
  ): Promise<void> {
	await this.execute(
	  `rm -rf '${homeDirectory}' && ` +
	    `mkdir -p '${workDirectory}'`
	)
  }
}
