import { AccesModule } from './acces.module';

describe('AccesModule', () => {
  let accesModule: AccesModule;

  beforeEach(() => {
    accesModule = new AccesModule();
  });

  it('should create an instance', () => {
    expect(accesModule).toBeTruthy();
  });
});
