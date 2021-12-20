import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ApolloClientOptions } from '@apollo/client';
import { InMemoryCache } from '@apollo/client/core';
import { APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './common/components/layout/layout.module';
import { LoginModule } from './login/login.module';
import { SignupModule } from './signup/signup.module';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    LoginModule,
    SignupModule,
    LayoutModule,
  ],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: (httpLink: HttpLink): ApolloClientOptions<unknown> => {
        return {
          cache: new InMemoryCache({
            addTypename: false,
          }),
          link: httpLink.create({
            uri: 'http://localhost:3000/api/bricz-server/v1/graphql',
          }),
          defaultOptions: {
            watchQuery: {
              fetchPolicy: 'no-cache',
              errorPolicy: 'all',
            },
            query: {
              fetchPolicy: 'no-cache',
              errorPolicy: 'all',
            },
            mutate: {
              fetchPolicy: 'no-cache',
              errorPolicy: 'all',
            },
          },
        };
      },
      deps: [HttpLink],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
