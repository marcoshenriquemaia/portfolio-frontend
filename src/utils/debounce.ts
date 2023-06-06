export class Debounce {
  private timer: ReturnType<typeof setTimeout> | null = null

  constructor(private readonly delay: number) {}

  run(callback: () => void) {
    if (this.timer) clearTimeout(this.timer)

    this.timer = setTimeout(callback, this.delay)
  }
}
