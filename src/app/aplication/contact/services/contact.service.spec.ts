import {async, TestBed, inject} from '@angular/core/testing';
import {HttpModule, XHRBackend, ResponseOptions, Response} from '@angular/http';
import {MockBackend} from '@angular/http/testing';
import {ContactService} from './contact.service';
import {MockCompany} from '../../../shared/mocks/company.mock';

describe('ContactService', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [
        ContactService,
        { provide: XHRBackend, useClass: MockBackend}
      ]
    })
  }));

  describe('getCompany()', () => {
    it('should return collection of company list',
      inject([ContactService, XHRBackend], (contactService: ContactService, mockBackend) => {
        expect(ContactService).toBeDefined();
        mockBackend.connections.subscribe((connection) => {
          connection.mockRespond(new Response(new ResponseOptions({
            body: JSON.stringify(MockCompany)
          })));
        });

        contactService.getCompany().subscribe((company) => {
          expect(company.country).toEqual('Poland');
        });
      }));
  });
});
