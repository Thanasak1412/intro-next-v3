export async function delay(time: number) {
  await new Promise<void>((resolve) => setTimeout(() => resolve(), time));
}
